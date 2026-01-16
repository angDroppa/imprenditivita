import { events } from "@/app/data/events"

export default function EventDetail({ params }: any) {
  const event = events.find(e => e.id === Number(params.id))

  if (!event) return <p>Evento non trovato</p>

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold fade-out">{event.title}</h1>
      <p>{event.description}</p>

      <ul className="mt-4">
        <li>📅 {event.date} {event.time}</li>
        <li>👥 {event.participants}/{event.maxParticipants}</li>
        <li>👤 Organizzatore: {event.organizer}</li>
      </ul>
    </main>
  )
}
