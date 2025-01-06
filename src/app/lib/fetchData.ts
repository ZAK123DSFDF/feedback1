export async function fetchData<T>(
  url: string
): Promise<T | { error: string; status: number }> {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      const errorData = await response.json()
      throw { status: response.status, error: errorData.error }
    }
    return await response.json()
  } catch (err: any) {
    return {
      error: err.error || "An error occurred",
      status: err.status || 500,
    }
  }
}
