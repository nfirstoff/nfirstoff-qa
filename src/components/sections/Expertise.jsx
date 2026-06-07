import { motion } from "framer-motion"
import { CheckCircle2, GitBranch, FileText } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"
import { profile } from "../../data/profile"

function ExpertiseBlock({ icon, title, items, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${color}`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.name}
            className="rounded-lg border border-gray-100 bg-gray-50 p-4 transition-all duration-200 hover:border-brand-100 hover:bg-brand-50/30"
          >
            <h4 className="mb-1 text-sm font-semibold text-gray-900">
              {item.name}
            </h4>
            <p className="text-xs leading-relaxed text-gray-500">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Expertise() {
  return (
    <section id="expertise" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Expertise & Approach"
          subtitle="How I deliver quality across the entire QA lifecycle"
        />

        <div className="space-y-6">
          <ExpertiseBlock
            icon={<CheckCircle2 className="h-5 w-5 text-emerald-600" />}
            title="Testing Types"
            items={profile.testingTypes}
            color="bg-emerald-50 text-emerald-600"
          />

          <ExpertiseBlock
            icon={<GitBranch className="h-5 w-5 text-brand-600" />}
            title="Processes & Methodologies"
            items={profile.processes}
            color="bg-brand-50 text-brand-600"
          />

          <ExpertiseBlock
            icon={<FileText className="h-5 w-5 text-amber-600" />}
            title="QA Documentation"
            items={profile.documentation}
            color="bg-amber-50 text-amber-600"
          />
        </div>
      </div>
    </section>
  )
}
