"use client"
import { useQuery } from "@tanstack/react-query"
import { fetchData } from "../lib/fetchData"

export default function JokePageCom1() {
  const { data, isPending } = useQuery({
    queryKey: ["joke"],
    queryFn: async () => {
      const data: any = await fetchData("http://localhost:3000/api/joke1")
      return data
    },
  })
  return (
    <>
      {isPending ? (
        <div>loading...</div>
      ) : data && data?.error ? (
        <div>{data?.error}</div>
      ) : (
        <div>{data?.joke}</div>
      )}
    </>
  )
}
