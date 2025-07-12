import React from "react"

const base =
  "inline-flex items-center rounded-full px-3 py-1 font-semibold text-xs border"
const variants = {
  default: "bg-purple-100 text-purple-800 border-purple-200",
  outline: "bg-white text-emerald-700 border-emerald-300",
  secondary:
    "bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 text-purple-800 border-purple-200",
}

export function Badge({ className = "", variant = "default", ...props }) {
  return (
    <span
      className={[base, variants[variant] || variants.default, className].join(
        " "
      )}
      {...props}
    />
  )
}
