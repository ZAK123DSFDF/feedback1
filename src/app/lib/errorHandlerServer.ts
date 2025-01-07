export default function errorHandlerServer(message?: string, status?: number) {
  throw {
    status: status || 400,
    error: message || "This is a simulated error from the server",
  }
}
export function returnError(err: any) {
  console.error(
    `Status: ${err.status || 500}, Message: ${
      err.error || "Internal server Error"
    }`
  )

  return {
    status: err.status || 500,
    error: err.error || "An error occurred while fetching the joke",
  }
}
