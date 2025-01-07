"use server"

import errorHandlerServer, { returnError } from "../lib/errorHandlerServer"

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default async function joke(): Promise<any> {
  try {
    // Simulate delay
    await delay(3000)

    // Simulate an error without making the fetch call
    errorHandlerServer()

    // If you want to fetch data conditionally, you can comment/remove this part
    /*
    const response = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw {
        status: response.status,
        error: errorData.error || response.statusText,
      };
    }

    const data = await response.json();
    return data;
    */
  } catch (err: any) {
    // Return the error object to the caller

    // Log the error
    return returnError(err)
  }
}
