// /app/api/fetchJoke/route.ts

import { NextResponse } from "next/server"

export async function fetchJoke() {
  try {
    throw new Error("something went wrong")
  } catch (error: any) {
    return { ok: false, message: error.message }
  }
}
