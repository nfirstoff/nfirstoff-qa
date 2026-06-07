import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bug, Repeat, Monitor, Network, Code2, Database, FileText, Search, ChevronDown } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"
import { investigationSteps } from "../../data/investigationFlow"

const iconMap = { Bug, Repeat, Monitor, Network, Code2, Database, FileText, Search }

export default function InvestigationFlow() {
  const [activeStep, setActiveStep] = useState(null)

  return (
    <section id="investigation" className="relative px-4 py-24 sm:py-32 bg-gray-50/50">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="How I Investigate Issues"
          subtitle="My structured approach to bug investigation and root cause analysis"
        />

        <div className="hidden lg:block">
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-200" />

            <div className="relative space-y-2">
              {investigationSteps.map((step, i) => {
                const Icon = iconMap[step.icon] || Bug
                const isActive = activeStep === step.id
                const isLeft = i % 2 === 0

                return (
                  <div key={step.id} className={`flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`w-5/12 ${isLeft ? "pr-8 text-right" : "pl-8"}`}>
                      <motion.button
                        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        onClick={() => setActiveStep(isActive ? null : step.id)}
                        className={`group w-full rounded-xl border p-4 text-left transition-all duration-200 ${
                          isActive
                            ? "border-brand-300 bg-brand-50 shadow-sm"
                            : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                        }`}
                      >
                        <div className={`flex items-center gap-3 ${isLeft ? "flex-row-reverse" : ""}`}>
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                            isActive ? "bg-brand-100 text-brand-600" : "bg-gray-100 text-gray-500 group-hover:bg-brand-50 group-hover:text-brand-600"
                          }`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className={isLeft ? "text-right" : ""}>
                            <p className="text-sm font-semibold text-gray-900">{step.title}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{step.description}</p>
                          </div>
                        </div>
                      </motion.button>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className={`mt-2 ${isLeft ? "text-right" : ""}`}>
                              <div className={`inline-block rounded-lg border border-gray-200 bg-white p-3 text-left ${isLeft ? "" : ""}`}>
                                <ul className="space-y-1">
                                  {step.details.map((detail, j) => (
                                    <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="relative z-10 flex w-2/12 justify-center">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-bold transition-colors ${
                        isActive
                          ? "border-brand-500 bg-brand-500 text-white"
                          : "border-gray-300 bg-white text-gray-500"
                      }`}>
                        {i + 1}
                      </div>
                    </div>

                    <div className="w-5/12" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="lg:hidden space-y-3">
          {investigationSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || Bug
            const isActive = activeStep === step.id

            return (
              <div key={step.id}>
                <motion.button
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  onClick={() => setActiveStep(isActive ? null : step.id)}
                  className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-all duration-200 ${
                    isActive
                      ? "border-brand-300 bg-brand-50 shadow-sm"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-600">
                    {i + 1}
                  </div>
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                    isActive ? "bg-brand-100 text-brand-600" : "bg-gray-100 text-gray-500"
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">{step.title}</p>
                    <p className="text-xs text-gray-500 truncate">{step.description}</p>
                  </div>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`} />
                </motion.button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-14 mt-2 border-l-2 border-brand-200 pl-4 py-1">
                        <ul className="space-y-1.5">
                          {step.details.map((detail, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
