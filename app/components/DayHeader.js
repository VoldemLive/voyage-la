import { Calendar, Gift, Clock, MapPin, Star } from "lucide-react"
import { Badge } from "./ui/badge"
import { HighlightBadge } from "./HighlightBadge"

function parseLocalDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number)
  return new Date(year, month - 1, day)
}

export function DayHeader({
  date,
  title,
  isBirthday,
  totalEvents,
  eventsWithLocation,
  highlight,
}) {
  const d = parseLocalDate(date)
  const dayName = d.toLocaleDateString("ru-RU", { weekday: "long" })
  const formattedDate = d.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="mb-6 sm:mb-8 shadow-2xl border-0 bg-white/95 backdrop-blur-sm overflow-hidden hover:shadow-3xl transition-all duration-700 rounded-2xl">
      <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 text-white relative overflow-hidden p-4 sm:p-8">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
          <div
            className="absolute inset-0 bg-white/10"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='#ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            }}
          />
        </div>
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-10 h-10 sm:w-16 sm:h-16 bg-white/10 rounded-full animate-bounce" />
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 bg-white/10 rounded-full animate-pulse" />
        <div className="relative z-10 flex flex-col items-start gap-2 mb-2 sm:mb-3">
          <div className="flex items-center gap-2 sm:gap-4 text-2xl sm:text-3xl font-bold flex-wrap">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <Calendar className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black">
                {dayName.charAt(0).toUpperCase() + dayName.slice(1)}
              </div>
              <div className="text-base sm:text-lg font-normal text-purple-100">
                {formattedDate}
              </div>
            </div>
            {highlight && (
              <HighlightBadge icon={highlight.icon}>
                {typeof highlight === "string" ? highlight : highlight.text}
              </HighlightBadge>
            )}
          </div>
        </div>
        <p className="text-purple-100 text-lg sm:text-xl font-medium mb-4 sm:mb-6 leading-relaxed">
          {title}
        </p>
        <div className="flex gap-2 sm:gap-4 text-xs sm:text-sm flex-wrap">
          <div className="flex items-center gap-1 sm:gap-2 bg-white/15 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300">
            <Clock className="h-4 w-4" />
            <span className="font-semibold">{totalEvents} событий</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 bg-white/15 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300">
            <MapPin className="h-4 w-4" />
            <span className="font-semibold">{eventsWithLocation} локаций</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 bg-white/15 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300">
            <Star className="h-4 w-4" />
            <span className="font-semibold">Особый день</span>
          </div>
        </div>
      </div>
    </div>
  )
}
