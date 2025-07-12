"use client"
import { useState } from "react"
import { TripHeader } from "./components/TripHeader"
import { DayView } from "./components/DayView"
import { DateSelector } from "./components/DateSelector"
import { ScrollToTopButton } from "./components/ScrollToTopButton"

const availableDates = [
  "2025-07-13",
  "2025-07-14",
  "2025-07-15",
  "2025-07-16",
  "2025-07-17",
  "2025-07-18",
  "2025-07-19",
  "2025-07-20",
]

export default function Home() {
  const [date, setDate] = useState(availableDates[0])
  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-br from-white via-purple-50 to-pink-50 min-h-screen pb-8 px-2 py-2 md:px-6 md:py-6">
      <TripHeader>
        <DateSelector
          dates={availableDates}
          activeDate={date}
          onChange={setDate}
        />
      </TripHeader>
      <DayView date={date} />
      <ScrollToTopButton />
    </div>
  )
}
