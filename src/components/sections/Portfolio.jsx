import { motion } from "framer-motion"
import { ArrowUpRight, Building2, TrendingUp, CreditCard, Bitcoin } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"
import Badge from "../ui/Badge"
import { profile } from "../../data/profile"

const projectIcons = [TrendingUp, Building2, CreditCard, Bitcoin]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Portfolio"
          subtitle="Real projects that shaped my QA expertise"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {profile.projects.map((project, i) => {
            const Icon = projectIcons[i] || Building2
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl glass-card p-6 transition-all duration-200 sm:p-8"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#007aff]/10 text-[#007aff]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-300 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-brand-500" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-500">
                  {project.description}
                </p>
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="default">{tag}</Badge>
                  ))}
                </div>
                <div className="rounded-xl bg-[#34c759]/10 border border-[#34c759]/15 px-3.5 py-2.5 backdrop-blur-sm">
                  <p className="text-xs font-medium text-emerald-700">
                    Impact: {project.impact}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
