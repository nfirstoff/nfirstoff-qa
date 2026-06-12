import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Wrench, CheckCircle2, AlertTriangle, Target } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"
import { qaTools } from "../../data/qaTools"

export default function QAToolbox() {
  const [expandedTool, setExpandedTool] = useState(null)

  const toggleTool = (id) => {
    setExpandedTool(expandedTool === id ? null : id)
  }

  return (
    <section id="toolbox" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="My QA Toolbox"
          subtitle="How I use tools in real QA workflows"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {qaTools.map((tool) => {
            const isExpanded = expandedTool === tool.id
            return (
              <motion.div
                key={tool.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl glass-card transition-all duration-200 ${
                  isExpanded ? "shadow-lg" : ""
                }`}
              >
                <button
                  onClick={() => toggleTool(tool.id)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl backdrop-blur-md"
                      style={{ backgroundColor: `${tool.color}15` }}
                    >
                      <Wrench className="h-5 w-5" style={{ color: tool.color }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">{tool.name}</h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/40 px-5 py-4 space-y-4">
                        <div>
                          <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                            <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                            Real Usage
                          </h4>
                          <p className="text-sm text-gray-600">{tool.realUsage}</p>
                        </div>

                        <div>
                          <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                            <AlertTriangle className="h-3 w-3 text-amber-500" />
                            Example Investigation
                          </h4>
                          <p className="text-sm text-gray-600">{tool.exampleInvestigation}</p>
                        </div>

                        <div>
                          <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                            <Target className="h-3 w-3 text-brand-500" />
                            Typical Tasks
                          </h4>
                          <ul className="space-y-1">
                            {tool.typicalTasks.map((task, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300" />
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-xl bg-[#007aff]/10 border border-[#007aff]/15 p-3 backdrop-blur-sm">
                          <p className="text-xs font-medium text-[#007aff]">Why It Matters</p>
                          <p className="mt-0.5 text-xs text-[#007aff]/80">{tool.whyItMatters}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
