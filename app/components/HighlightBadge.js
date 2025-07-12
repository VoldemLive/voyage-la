export function HighlightBadge({ children, icon }) {
  return (
    <span className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-yellow-300 to-orange-300 text-yellow-900 font-bold px-2 sm:px-4 py-0.5 sm:py-1 rounded-full shadow-md text-xs sm:text-sm animate-pulse">
      <span className="text-sm sm:text-base">{icon || "⭐"}</span>
      {children}
    </span>
  )
}
