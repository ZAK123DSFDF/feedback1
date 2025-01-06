import { NextResponse } from "next/server"

export class HttpException extends Error {
  status: number
  message: string

  constructor(message: string, status: number) {
    super(message)
    this.name = "HttpException"
    this.status = status
    this.message = message
  }
}

export function handleError(error: any) {
  if (error instanceof HttpException) {
    return NextResponse.json({ error: error.message }, { status: error.status })
  }
  return NextResponse.json(
    { error: "An unexpected error occurred." },
    { status: 500 }
  )
}
