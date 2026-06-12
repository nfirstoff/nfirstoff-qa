import { motion } from "framer-motion"

export default function SectionTitle({ title, subtitle, light }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-14 text-center"
    >
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${light ? "text-white" : "text-gray-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-3 max-w-2xl text-base sm:text-lg ${light ? "text-gray-300" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#007aff] to-[#30b0c7]" />
    </motion.div>
  )
}
