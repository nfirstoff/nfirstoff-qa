import { motion } from "framer-motion"

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "p-6",
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      whileHover={hover ? { y: -4 } : undefined}
      className={`rounded-2xl glass-card transition-all duration-200 ${hover ? "hover:shadow-lg" : ""} ${padding} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
