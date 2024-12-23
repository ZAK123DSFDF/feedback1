"use server"
export async function fetchData2(body: any) {
  try {
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
      throw new Error(errorDetails?.message || "Failed to fetch data.")
    }

    return await response.json()
  } catch (err: any) {
    throw err
  }
}
