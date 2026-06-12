import { motion } from "framer-motion"

const variants = {
  primary:
    "bg-[#007aff] text-[#ffffff] hover:bg-[#0062cc] shadow-sm hover:shadow-md",
  secondary:
    "bg-white/65 backdrop-blur-xl text-gray-700 hover:bg-white/80 border border-white/60 shadow-sm",
  outline:
    "border border-white/60 bg-white/40 backdrop-blur-xl text-[#007aff] hover:bg-white/70",
  ghost:
    "text-gray-500 hover:text-gray-900 hover:bg-white/50 backdrop-blur-xl",
  light:
    "bg-white/65 backdrop-blur-xl text-[#007aff] hover:bg-white/80 border border-white/60",
}

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}) {
  const cls = `inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={cls}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={cls}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
