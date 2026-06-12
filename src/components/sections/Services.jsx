import { motion } from "framer-motion"
import { TestTube, Code2, Database, FileText } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"
import { profile } from "../../data/profile"

const icons = { TestTube, Code2, Database, FileText }

export default function Services() {
  return (
    <section id="services" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Services"
          subtitle="What I bring to your engineering team"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {profile.services.map((service, i) => {
            const Icon = icons[service.icon] || Code2
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl glass-card p-6 transition-all duration-200 sm:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#007aff]/10 text-[#007aff] transition-colors group-hover:bg-[#007aff]/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
