import { fetchData2 } from "@/app/product1/action"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = await fetchData2(body)
    return NextResponse.json(data)
  } catch (err: any) {
    return NextResponse.json(
      { message: err.message || "An unexpected error occurred." },
      { status: 400 }
    )
  }
}
