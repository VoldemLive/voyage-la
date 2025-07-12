import { useState } from "react"
import {
  Clock,
  ChevronDown,
  ChevronUp,
  MapPin,
  StickyNote,
  Sparkles,
} from "lucide-react"
import { ActionButtons } from "./ActionButtons"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { HighlightBadge } from "./HighlightBadge"

const defaultGradients = [
  "from-pink-400 to-yellow-300",
  "from-purple-400 to-pink-400",
  "from-blue-400 to-emerald-400",
  "from-orange-400 to-red-400",
  "from-emerald-400 to-cyan-400",
  "from-yellow-400 to-pink-500",
  "from-fuchsia-500 to-purple-500",
]

function pickDefaultGradient(index) {
  return defaultGradients[index % defaultGradients.length]
}

function OptionCard({ option, index }) {
  const gradient = option.gradient || pickDefaultGradient(index)
  const icon = option.icon || "🍽️"
  return (
    <div className="rounded-2xl border bg-white/90 p-4 mb-3 shadow-md">
      <div className="flex items-center gap-3 mb-2 sm:flex-row flex-col sm:items-center items-start">
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center text-white text-3xl sm:text-4xl`}
        >
          {icon}
        </div>
        <div className="font-bold text-lg sm:text-lg text-base mt-1 sm:mt-0">
          {option.title}
        </div>
      </div>
      {option.location && (
        <div className="flex items-center gap-2 text-sm text-blue-700 mb-1">
          <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>{option.location.name}</span>
        </div>
      )}
      <div className="text-gray-700 mb-2 text-sm sm:text-base">
        {option.description}
      </div>
      {option.highlights && option.highlights.length > 0 && (
        <div className="mb-2">
          <HighlightBadge>Ключевые моменты</HighlightBadge>
          <ul className="list-disc ml-6 mt-1 text-yellow-900 text-xs sm:text-sm">
            {option.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      )}
      {option.note && (
        <div className="bg-yellow-50 border-l-4 border-yellow-300 p-2 rounded mb-2 text-yellow-800 text-xs sm:text-sm flex items-start gap-2">
          <StickyNote className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5" />
          <span>{option.note}</span>
        </div>
      )}
      {option.location && <ActionButtons location={option.location} />}
    </div>
  )
}

export function EventCard({ event, isLast, eventIndex }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  // Use icon and gradient from JSON if present
  const icon = event.icon || "📍"
  const gradientColor = event.gradient || pickDefaultGradient(eventIndex)

  return (
    <div className="relative group">
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-8 top-28 w-1 h-20 bg-gradient-to-b from-purple-300 via-pink-300 to-blue-300 opacity-60 rounded-full" />
      )}
      {/* Event number */}
      <div className="absolute -left-3 top-8 z-20">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-white flex items-center justify-center text-sm font-bold text-white shadow-lg animate-pulse">
          {eventIndex + 1}
        </div>
      </div>
      <div
        className={`ml-10 shadow-2xl hover:shadow-3xl transition-all duration-700 border-0 overflow-hidden group-hover:scale-[1.02] group-hover:rotate-1 ${
          isCompleted ? "opacity-75 scale-95" : ""
        } bg-gradient-to-br from-white to-gray-50 rounded-xl mb-8`}
      >
        {/* Animated header gradient */}
        <div
          className={`h-3 bg-gradient-to-r ${gradientColor} relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
        </div>
        <div className="p-0">
          <div className="p-4 sm:p-6">
            {/* Top section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-2">
              <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 text-purple-800 border-purple-200 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold shadow-sm"
                >
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                  {event.time}
                </Badge>
                {event.location && event.location.name && (
                  <Badge
                    variant="outline"
                    className="text-emerald-700 border-emerald-300 bg-emerald-50 text-xs sm:text-sm"
                  >
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mr-1" />
                    {event.location.name}
                  </Badge>
                )}
              </div>
              <div className="flex flex-row sm:flex-row self-end sm:self-auto justify-end gap-2 sm:gap-3 mt-2 sm:mt-0">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsCompleted(!isCompleted)}
                  className={`h-12 w-12 sm:h-10 sm:w-10 p-0 rounded-full transition-all duration-300 flex items-center justify-center ${
                    isCompleted
                      ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg scale-110"
                      : "text-gray-400 hover:text-green-600 hover:bg-green-50 hover:scale-110"
                  }`}
                >
                  <Sparkles
                    className={`h-8 w-8 sm:h-6 sm:w-6 ${
                      isCompleted ? "animate-spin" : ""
                    }`}
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="h-12 w-12 sm:h-10 sm:w-10 p-0 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                >
                  {isExpanded ? (
                    <ChevronUp className="h-8 w-8 sm:h-6 sm:w-6" />
                  ) : (
                    <ChevronDown className="h-8 w-8 sm:h-6 sm:w-6" />
                  )}
                </Button>
              </div>
            </div>
            {/* Layout карточки: flex-col на моб, flex-row на md+ (landscape) */}
            <div className="flex gap-4 sm:gap-6 flex-col md:flex-row">
              {/* Эмоджи события и подложка: ограничение ширины на md+ */}
              <div className="flex-shrink-0 flex justify-center md:items-start md:justify-start mb-2 md:mb-0 w-full md:w-auto">
                <div
                  className={`w-full max-w-xs md:max-w-md sm:w-24 sm:h-24 h-20 md:h-32 rounded-2xl bg-gradient-to-br ${gradientColor} flex items-center justify-center text-white text-6xl sm:text-6xl shadow-xl mx-auto md:mx-0`}
                >
                  {icon}
                </div>
              </div>
              {/* Текстовый контент */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 leading-tight hover:text-purple-700 transition-colors duration-300">
                  {event.title}
                </h3>
                <div className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  {isExpanded ? (
                    <div className="space-y-4 sm:space-y-6">
                      <p className="whitespace-pre-line">{event.description}</p>
                      {/* Location details */}
                      {event.location && (
                        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-3 sm:p-5 rounded-xl border-2 border-blue-100 shadow-inner">
                          <div className="flex items-start gap-2 sm:gap-3">
                            <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-bold text-blue-800 text-base sm:text-lg">
                                {event.location.name}
                              </p>
                              <p className="text-blue-700 text-xs sm:text-base">
                                {event.location.address}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Highlights */}
                      {event.highlights && event.highlights.length > 0 && (
                        <div className="mb-2">
                          <HighlightBadge>Ключевые моменты</HighlightBadge>
                          <ul className="list-disc ml-6 mt-1 text-yellow-900 text-xs sm:text-base">
                            {event.highlights.map((highlight, index) => (
                              <li key={index}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {/* Note */}
                      {event.note && (
                        <div className="bg-yellow-50 border-l-4 border-yellow-300 p-2 rounded mb-2 text-yellow-800 text-xs sm:text-base flex items-start gap-2">
                          <StickyNote className="w-4 h-4 mt-0.5" />
                          <span>{event.note}</span>
                        </div>
                      )}
                      {/* Options (nested restaurants) */}
                      {event.options && Array.isArray(event.options) && (
                        <div className="mt-4">
                          <div className="font-semibold mb-2 text-lg">
                            Варианты ужина:
                          </div>
                          <div className="space-y-4">
                            {event.options.map((opt, i) => (
                              <OptionCard key={i} option={opt} index={i} />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="line-clamp-3">{event.description}</p>
                  )}
                </div>
              </div>
            </div>
            {/* Action buttons */}
            {event.location && (
              <div className="mt-6 pt-6 border-t-2 border-blue-100">
                <ActionButtons location={event.location} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
