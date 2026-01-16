'use client'

import { useState } from 'react'
import EventCard from '../components/EventCard'
import { events } from '../data/events'


export default function SwipePage() {
  const [index, setIndex] = useState(0)
  const [matches, setMatches] = useState<number[]>([])

  const event = events[index]

  const swipe = (direction: 'like' | 'dislike') => {
    if (direction === 'like') {
      setMatches([...matches, event.id])
    }
    setIndex(index + 1)
  }

  if (!event) {
    return <p className="text-center mt-20">Nessuna altra attività 😢</p>
  }

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <EventCard event={event} />

      <div className="flex gap-6 mt-6">
        <button
          onClick={() => swipe('dislike')}
          className="px-6 py-3 bg-red-500 text-white rounded-full"
        >
          ❌
        </button>
        <button
          onClick={() => swipe('like')}
          className="px-6 py-3 bg-green-500 text-white rounded-full"
        >
          ❤️
        </button>
      </div>
    </main>
  )
}
