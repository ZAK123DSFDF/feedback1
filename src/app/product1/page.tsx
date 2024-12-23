"use client"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { fetchData2 } from "./action"

export default function ProductPage() {
  const [body] = useState({ key: "value" })
  const [message, setMessage] = useState<string>("")
  const fetchData1 = async (body: any) => {
    try {
      const response = await fetch("/api/fetchData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })

      if (!response.ok) {
        const errorDetails = await response.json()
        throw new Error(errorDetails.message || "Failed to fetch data.")
      }

      return await response.json()
    } catch (error: any) {
      throw error
    }
  }
  const mutation = useMutation({
    mutationFn: (body: any) => fetchData1(body),
    onSuccess: (data) => {
      console.log("Success:", data)
      setMessage(data.message)
    },
    onError: (error: any) => {
      console.error("Error:", error.message)
      setMessage(error.message)
    },
  })

  return (
    <div>
      <button
        onClick={() => mutation.mutate(body)}
        style={{ marginBottom: "10px" }}
      >
        Fetch Data
      </button>
      {mutation.isPending && <div style={{ color: "gray" }}>Loading...</div>}
      {mutation.isError && (
        <div style={{ color: "red" }}>{mutation.error.message}</div>
      )}
      {mutation.isSuccess && (
        <div style={{ color: "black" }}>Data: {mutation.data.message.key}</div>
      )}
    </div>
  )
}
