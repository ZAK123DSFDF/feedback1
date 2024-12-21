"use client"

import { useState, useEffect } from "react"
import { fetchJoke } from "./action" // Import the server action

export default function ProductPage() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: any = await fetchJoke()
        console.log("this is the result", result)
        if (!result.ok) {
          setError(result.message)
        }

        setData(result)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {loading && <div style={{ color: "gray" }}>Loading...</div>}

      {error && <div style={{ color: "red" }}>Error: {error.message}</div>}

      {data && <div style={{ color: "black" }}>Data: {data.message}</div>}
    </div>
  )
}
