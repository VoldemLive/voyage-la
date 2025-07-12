import { Plane, Sparkles, Calendar, Sun } from "lucide-react"
import { Badge } from "./ui/badge"

export function TripHeader({ children }) {
  return (
    <div className="text-center mb-12 relative">
      <div className="inline-flex items-center gap-4 mb-8 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
        <Plane className="h-8 w-8 text-blue-600 animate-bounce" />
        <span className="text-blue-600 font-bold text-xl">
          Путешествие мечты
        </span>
        <Sparkles className="h-6 w-6 text-purple-600 animate-spin" />
      </div>
      <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight hover:scale-105 transition-transform duration-500">
        Лос-Анджелес
      </h1>
      <div className="flex items-center justify-center gap-6 mb-10 flex-wrap">
        <Badge
          variant="outline"
          className="text-xl px-6 py-3 border-purple-300 text-purple-700 bg-purple-50 hover:bg-purple-100 transition-all duration-300 hover:scale-105"
        >
          <Calendar className="h-5 w-5 mr-2" />
          13 — 20 июля 2025
        </Badge>
        <Badge
          variant="outline"
          className="text-xl px-6 py-3 border-orange-300 text-orange-700 bg-orange-50 hover:bg-orange-100 transition-all duration-300 hover:scale-105"
        >
          <Sun className="h-5 w-5 mr-2" />8 незабываемых дней
        </Badge>
      </div>
      {children}
    </div>
  )
}
