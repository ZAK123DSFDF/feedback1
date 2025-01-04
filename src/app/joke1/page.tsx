import Link from "next/link"

export default async function JokePage() {
  const response = await fetch("http://localhost:3000/api/joke", {
    next: { revalidate: 30 },
  }).then((res) => res.json())

  return (
    <>
      {response && (
        <div>
          <h1>Joke</h1>
          <pre>{JSON.stringify(response, null, 2)}</pre>
          <Link href="/joke">joke</Link>
        </div>
      )}
    </>
  )
}
