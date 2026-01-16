// components/EventCard.tsx
import Link from 'next/link'

export default function EventCard({ event }: any) {
  return (
    <div className="w-80 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg hover:shadow-2xl p-6 border border-green-200 transition-all duration-300 hover:scale-105 hover:border-green-300">
      <h2 className="text-2xl font-bold text-green-800">{event.title}</h2>
      <p className="text-sm text-green-600 mt-1 font-medium">
        📅 {event.date} · ⏰ {event.time} · ⏱️ {event.duration}
      </p>

      <p className="mt-4 text-green-700 leading-relaxed">{event.description}</p>

      <div className="mt-4 p-3 bg-white rounded-lg border border-green-200">
        <p className="text-sm text-green-800 font-medium">
          📍 {event.location}
        </p>
      </div>

      <div className="mt-3 flex items-center justify-between text-sm">
        <span className="text-green-600">👥 {event.participants}/{event.maxParticipants}</span>
        <span className="text-green-500 font-medium">👤 {event.organizer}</span>
      </div>

      <Link
        href={`/events/${event.id}`}
        className="block mt-5 w-full text-center bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-2 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-md hover:shadow-lg"
      >
        Vedi dettagli →
      </Link>
    </div>
  )
}
