"use client"

import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

export default function JokePage() {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["joke"],
    queryFn: async () => {
      const response = await fetch("/api/joke")
      if (!response.ok) {
        throw new Error(`Error fetching joke: ${response.statusText}`)
      }
      return response.json()
    },
  })

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {error.message}</div>}
      {data && (
        <div>
          <h1>Joke</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <Link href="/joke1">joke1</Link>
        </div>
      )}
    </>
  )
}
