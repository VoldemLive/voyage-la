import React from "react"

const base =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
const variants = {
  default: "bg-purple-600 text-white hover:bg-purple-700",
  outline:
    "border border-purple-600 text-purple-700 bg-white hover:bg-purple-50",
  ghost: "bg-transparent text-purple-700 hover:bg-purple-100",
  secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
}
const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-6 text-lg",
}

export const Button = React.forwardRef(function Button(
  { className = "", variant = "default", size = "md", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={[
        base,
        variants[variant] || variants.default,
        sizes[size] || sizes.md,
        className,
      ].join(" ")}
      {...props}
    />
  )
})
