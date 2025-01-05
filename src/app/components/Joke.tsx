"use client"
export default function JokePageCom({
  data1,
  data2,
}: {
  data1?: any
  data2?: any
}) {
  return (
    <>
      {data1 && <pre>{JSON.stringify(data1, null, 2)}</pre>}{" "}
      {data2 && <pre>{JSON.stringify(data2, null, 2)}</pre>}
    </>
  )
}
