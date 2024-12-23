import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const response = await fetch("http://localhost:4000/fetchData", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    if (!response.ok) {
      const errorDetails = await response.json()
      return NextResponse.json(
        {
          message: errorDetails?.message || "Failed to fetch data.",
        },
        { status: response.status }
      )
    }
    const data = await response.json()
    return NextResponse.json(data)
  } catch (err: any) {
    throw err
  }
}
