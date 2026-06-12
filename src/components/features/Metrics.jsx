import { motion } from "framer-motion"
import SectionTitle from "../ui/SectionTitle"
import { profile } from "../../data/profile"

function MetricCard({ metric, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-2xl glass-card p-6 text-center transition-all duration-200"
    >
        <div className="text-xl font-bold text-[#007aff] sm:text-2xl leading-tight">
        {metric.value}
      </div>
      <div className="mt-1 text-sm text-gray-500">{metric.label}</div>
    </motion.div>
  )
}

export default function Metrics() {
  return (
    <section id="metrics" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="QA at a Glance"
          subtitle="Experience and expertise overview"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {profile.metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
