import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      aria-label="Scroll to top"
      onClick={handleClick}
      className={`fixed z-50 bottom-6 right-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full shadow-2xl p-4 transition-all duration-300 hover:scale-110 hover:shadow-3xl focus:outline-none focus:ring-2 focus:ring-pink-400 ${
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <ChevronUp className="w-7 h-7" />
    </button>
  )
}
