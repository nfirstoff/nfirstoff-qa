export default function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-gray-500/10 text-gray-700 border border-gray-500/10",
    brand: "bg-[#007aff]/10 text-[#007aff] border border-[#007aff]/15",
    success: "bg-[#34c759]/10 text-emerald-700 border border-[#34c759]/15",
    warning: "bg-[#ff9500]/10 text-amber-700 border border-[#ff9500]/15",
    error: "bg-[#ff3b30]/10 text-red-700 border border-[#ff3b30]/15",
    high: "bg-[#ff3b30]/10 text-red-700 border border-[#ff3b30]/20",
    medium: "bg-[#ff9500]/10 text-amber-700 border border-[#ff9500]/20",
    low: "bg-[#007aff]/10 text-blue-700 border border-[#007aff]/20",
    critical: "bg-[#ff3b30]/15 text-red-800 border border-[#ff3b30]/25",
  }

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium backdrop-blur-md ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  )
}
