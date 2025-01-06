import { Suspense } from "react"

export default function Layout({
  data1,
  data2,
  children,
}: {
  data1: React.ReactNode
  data2: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <>
      {data1}
      {data2}
      {children}
    </>
  )
}
