function parseLocalDate(dateStr) {
  // dateStr: 'YYYY-MM-DD'
  const [year, month, day] = dateStr.split("-").map(Number)
  return new Date(year, month - 1, day)
}

export function DateSelector({ dates, activeDate, onChange }) {
  return (
    <div className="flex gap-2 sm:gap-3 justify-center mb-8 sm:mb-10 flex-wrap">
      {dates.map((date) => {
        const d = parseLocalDate(date)
        const day = d.getDate()
        const month = d.toLocaleString("ru-RU", { month: "short" })
        const weekday = d.toLocaleString("ru-RU", { weekday: "short" })
        const isActive = date === activeDate
        return (
          <button
            key={date}
            onClick={() => onChange(date)}
            className={
              "min-w-[70px] max-w-[100px] sm:min-w-[90px] sm:max-w-[120px] px-0 py-0 rounded-2xl font-bold flex flex-col items-center shadow-lg transition-all duration-500 text-base sm:text-lg " +
              (isActive
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl scale-110 rotate-2 border-2 border-pink-300"
                : "bg-white/90 text-purple-700 border-2 border-purple-100 hover:bg-purple-50 hover:border-purple-300 hover:scale-105 hover:-rotate-1")
            }
            style={{ padding: "0.4rem 0.5rem" }}
          >
            <span className="text-xs opacity-75 font-semibold mt-1 mb-0.5">
              {weekday}
            </span>
            <span className="font-black text-lg sm:text-xl mb-1">
              {day} {month}
            </span>
          </button>
        )
      })}
    </div>
  )
}
