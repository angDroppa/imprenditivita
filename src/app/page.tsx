import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-3xl font-bold">🔥 Activity Match</h1>
      <p>Swippa attività, non persone</p>

      <Link
        href="/swipe"
        className="px-6 py-3 bg-black text-white rounded-full"
      >
        Inizia a swippare →
      </Link>
    </main>
  )
}
