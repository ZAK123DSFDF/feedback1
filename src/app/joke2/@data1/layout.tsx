import { Suspense } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<div>loading1...</div>}>{children}</Suspense>
    </>
  )
}
