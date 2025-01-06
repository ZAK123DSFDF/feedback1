import JokePageCom from "@/app/components/Joke"
import { fetchData } from "@/app/lib/fetchData"

export const dynamic = "force-dynamic"

export default async function JokePage() {
  const data2 = await fetchData("http://localhost:3000/api/joke1")

  return (
    <>
      <JokePageCom data2={data2} />
    </>
  )
}
