import { HttpException, handleError } from "@/app/lib/errorHandler"

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export async function GET() {
  try {
    await delay(3000)
    throw new HttpException("Failed to fetch data.", 400)
  } catch (error) {
    return handleError(error)
  }
}
