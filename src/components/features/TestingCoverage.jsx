import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CreditCard, ShieldAlert, Wallet, Layout, ArrowLeftRight, Users, TrendingUp, Bitcoin, CheckCircle2, AlertTriangle, Bug, Target, ChevronRight } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"
import { coverageAreas } from "../../data/testingCoverage"

const iconMap = {
  CreditCard, ShieldAlert, Wallet, Layout, ArrowLeftRight, Users, TrendingUp, Bitcoin,
}

function DetailPanel({ area }) {
  if (!area) return null
  const Icon = iconMap[area.icon] || Layout

  const sections = [
    { icon: CheckCircle2, title: "What I Validated", items: area.validated, color: "text-emerald-600", bg: "bg-emerald-50" },
    { icon: AlertTriangle, title: "Risks I Checked", items: area.risks, color: "text-amber-600", bg: "bg-amber-50" },
    { icon: Bug, title: "Common Defects", items: area.defects, color: "text-red-600", bg: "bg-red-50" },
    { icon: Target, title: "Testing Strategy", items: area.strategy, color: "text-brand-600", bg: "bg-brand-50" },
  ]

  return (
    <motion.div
      key={area.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="border-b border-gray-200 bg-gradient-to-r from-brand-50 to-blue-50 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{area.name}</h3>
              <p className="text-sm text-gray-500">{area.description}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                <section.icon className={`h-3.5 w-3.5 ${section.color}`} />
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${section.color.replace("text-", "bg-")}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {area.connections && (
            <div className="border-t border-gray-100 pt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">System Connections</h4>
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
                {area.connections.map((conn, i) => (
                  <span key={conn} className="flex items-center gap-1">
                    <span className="rounded-md bg-gray-100 px-2 py-1 font-medium text-gray-700">{conn}</span>
                    {i < area.connections.length - 1 && <ChevronRight className="h-3 w-3 text-gray-300" />}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function TestingCoverage() {
  const [selectedArea, setSelectedArea] = useState(coverageAreas[0])

  return (
    <section id="coverage" className="relative px-4 py-24 sm:py-32 bg-gray-50/50">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Fintech Testing Coverage"
          subtitle="Areas and systems I have validated in real-world environments"
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Coverage Areas</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {coverageAreas.map((area) => {
                  const Icon = iconMap[area.icon] || Layout
                  const isActive = selectedArea?.id === area.id
                  return (
                    <button
                      key={area.id}
                      onClick={() => setSelectedArea(area)}
                      className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${
                        isActive
                          ? "bg-brand-50 text-brand-700 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-brand-600" : "text-gray-400"}`} />
                      <span>{area.name}</span>
                      {isActive && <div className="ml-auto h-2 w-2 rounded-full bg-brand-500" />}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <DetailPanel key={selectedArea?.id} area={selectedArea} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
