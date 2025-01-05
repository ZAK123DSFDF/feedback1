import JokePageCom from "../components/Joke"
import joke from "./action"
import joke1 from "./action1"

export default async function JokePage() {
  const data = await joke()
  const data2 = await joke1()
  return (
    <>
      <JokePageCom data1={data} data2={data2} />
    </>
  )
}
