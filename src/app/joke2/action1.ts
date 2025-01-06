import { NextResponse } from "next/server"

class HttpException extends Error {
  status: number
  message: string

  constructor(message: string, status: number) {
    super(message)
    this.name = "HttpException"
    this.status = status
    this.message = message
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default async function joke1() {
  try {
    await delay(3000)
    throw new HttpException("Failed to fetch data.", 400)
  } catch (err: any) {
    if (err instanceof HttpException) {
      return { error: err.message, status: err.status }
    }
  }
}
