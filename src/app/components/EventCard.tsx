// components/EventCard.tsx
import Link from 'next/link'

export default function EventCard({ event }: any) {
  return (
    <div className="w-80 bg-white rounded-xl shadow-lg p-4">
      <h2 className="text-xl font-bold">{event.title}</h2>
      <p className="text-sm text-gray-500">
        {event.date} · {event.time} · {event.duration}
      </p>

      <p className="mt-2">{event.description}</p>

      <p className="mt-2 text-sm">
        📍 {event.location}
      </p>

      <Link
        href={`/events/${event.id}`}
        className="block mt-4 text-blue-500"
      >
        Vedi dettagli →
      </Link>
    </div>
  )
}
