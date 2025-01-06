"use client"
import { useQuery } from "@tanstack/react-query"
import { fetchData } from "../lib/fetchData"

export default function JokePageCom({
  data1,
  data2,
}: {
  data1?: any
  data2?: any
}) {
  const { data, isPending } = useQuery({
    queryKey: ["joke"],
    queryFn: async () => {
      const data = await fetchData("http://localhost:3000/api/joke1")
      return data
    },
  })
  return (
    <>
      {data1 && <div>{data1.joke}</div>}{" "}
      {data2 && data2?.error ? (
        <div>{data2?.error}</div>
      ) : (
        <div>{data2?.joke}</div>
      )}
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
