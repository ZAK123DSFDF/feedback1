"use server"

export default async function joke() {
  try {
    console.log("this is the request")
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
