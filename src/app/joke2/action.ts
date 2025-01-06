"use server"

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export default async function joke() {
  try {
    await delay(3000)
    const response = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (err: any) {
    throw err
  }
}
