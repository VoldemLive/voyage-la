"use client"
import { useEffect, useState } from "react"
import { EventCard } from "./EventCard"
import { DayHeader } from "./DayHeader"

export function DayView({ date }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(`/data/${date}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Data not found")
        return res.json()
      })
      .then((json) => {
        setData(json)
        setLoading(false)
      })
      .catch((e) => {
        setError(e.message)
        setLoading(false)
      })
  }, [date])

  if (loading)
    return <div className="p-8 text-center text-gray-400">Загрузка...</div>
  if (error)
    return <div className="p-8 text-center text-red-500">Ошибка: {error}</div>
  if (!data) return null

  const isBirthday = data.title.toLowerCase().includes("день рождения")
  const totalEvents = data.events.length
  const eventsWithLocation = data.events.filter((e) => e.location).length

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-white via-purple-50 to-pink-50 pb-16 px-2">
      <div className="w-full max-w-3xl mx-auto px-2 sm:px-0">
        <DayHeader
          date={data.date}
          title={data.title}
          isBirthday={isBirthday}
          totalEvents={totalEvents}
          eventsWithLocation={eventsWithLocation}
          highlight={data.highlight || { text: "Особый день", icon: "⭐️" }}
        />
        <div className="space-y-8">
          {data.events.map((event, i) => (
            <EventCard
              key={i}
              event={event}
              isLast={i === data.events.length - 1}
              eventIndex={i}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
