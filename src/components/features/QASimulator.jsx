import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, CheckCircle2, XCircle, AlertTriangle, Shield, Code2, Database, Monitor } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"
import { qaFeatures, qaCategories } from "../../data/qaSimulator"

const categoryIcons = {
  positive: CheckCircle2,
  negative: XCircle,
  edgeCases: AlertTriangle,
  security: Shield,
  api: Code2,
  database: Database,
  crossBrowser: Monitor,
}

function CollapsibleCategory({ category, items, index }) {
  const [open, setOpen] = useState(index === 0)
  const Icon = categoryIcons[category.id] || CheckCircle2

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="border border-gray-200 rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors ${
          open ? "bg-gray-50 border-b border-gray-200" : "hover:bg-gray-50"
        }`}
      >
        <span className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
          <Icon className={`h-4 w-4 ${category.color.split(" ")[1].replace("text-", "text-")}`} />
          {category.label}
          <span className="text-xs text-gray-400 font-normal">({items.length})</span>
        </span>
        <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 py-3">
              <ul className="space-y-1.5">
                {items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${category.color.split(" ")[1]}`} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function QASimulator() {
  const [selectedFeature, setSelectedFeature] = useState(qaFeatures[0])

  return (
    <section id="simulator" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="How I Think as a QA Engineer"
          subtitle="Select a feature and see how I would approach testing"
        />

        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {qaFeatures.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setSelectedFeature(feature)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  selectedFeature.id === feature.id
                    ? "bg-brand-600 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {feature.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFeature.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="border-b border-gray-200 bg-gradient-to-r from-brand-50 to-blue-50 px-6 py-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Testing Breakdown: {selectedFeature.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Comprehensive QA approach covering {Object.values(selectedFeature.categories).reduce((a, c) => a + c.length, 0)} test scenarios
                  </p>
                </div>

                <div className="p-6 space-y-3">
                  {qaCategories.map((cat, i) => {
                    const items = selectedFeature.categories[cat.id]
                    if (!items || items.length === 0) return null
                    return (
                      <CollapsibleCategory
                        key={cat.id}
                        category={cat}
                        items={items}
                        index={i}
                      />
                    )
                  })}
                </div>

                <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Frontend
                    </span>
                    <span className="text-gray-300">→</span>
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-brand-400" />
                      API
                    </span>
                    <span className="text-gray-300">→</span>
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-purple-400" />
                      Database
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
