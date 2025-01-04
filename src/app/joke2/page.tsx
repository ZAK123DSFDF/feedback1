"use client"

import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import joke from "./action"

export default function JokePage() {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["joke"],
    queryFn: () => joke(),
  })

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {error.message}</div>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  )
}
