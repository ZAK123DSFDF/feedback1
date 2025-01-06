import JokePageCom from "@/app/components/Joke"
import joke from "../action"
export default async function JokePage() {
  const data = await joke()
  return (
    <>
      <JokePageCom data1={data} />
    </>
  )
}
