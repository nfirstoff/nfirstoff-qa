import { motion } from "framer-motion"

const variants = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-sm hover:shadow-md",
  secondary:
    "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200",
  outline:
    "border-2 border-brand-600 text-brand-600 hover:bg-brand-50",
  ghost:
    "text-gray-500 hover:text-gray-900 hover:bg-gray-100",
  light:
    "bg-white text-brand-700 hover:bg-brand-50 border border-gray-200",
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
