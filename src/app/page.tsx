import Link from "next/link"

export default function Home() {
  return (
    <main>
      <p>Home</p>
      <Link href="/dashboard">
        Go to dashboard
      </Link>
    </main>
  )
}
