import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bug, Repeat, Monitor, Network, Code2, Database, FileText, Search, ChevronDown } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"
import { investigationSteps } from "../../data/investigationFlow"

const iconMap = { Bug, Repeat, Monitor, Network, Code2, Database, FileText, Search }

export default function InvestigationFlow() {
  const [activeStep, setActiveStep] = useState(null)

  return (
    <section id="investigation" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="How I Investigate Issues"
          subtitle="My structured approach to bug investigation and root cause analysis"
        />

        <div className="hidden lg:block">
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-white/50" />

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
                        className={`group w-full rounded-2xl p-4 text-left transition-all duration-200 ${
                          isActive
                            ? "glass-card-strong border-[#007aff]/20"
                            : "glass-card"
                        }`}
                      >
                        <div className={`flex items-center gap-3 ${isLeft ? "flex-row-reverse" : ""}`}>
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                            isActive ? "bg-[#007aff]/10 text-[#007aff]" : "bg-white/50 text-gray-500 group-hover:bg-[#007aff]/10 group-hover:text-[#007aff]"
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
                              <div className={`inline-block rounded-xl glass-card p-3 text-left ${isLeft ? "" : ""}`}>
                                <ul className="space-y-1">
                                  {step.details.map((detail, j) => (
                                    <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#007aff]" />
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
                          ? "border-[#007aff] bg-[#007aff] text-white"
                          : "border-white/60 bg-white/65 text-gray-500"
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
                  className={`flex w-full items-center gap-3 rounded-2xl p-4 text-left transition-all duration-200 ${
                    isActive
                      ? "glass-card-strong border-[#007aff]/20"
                      : "glass-card"
                  }`}
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/50 text-xs font-bold text-gray-600">
                    {i + 1}
                  </div>
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                    isActive ? "bg-[#007aff]/10 text-[#007aff]" : "bg-white/50 text-gray-500"
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
                      <div className="ml-14 mt-2 border-l-2 border-[#007aff]/30 pl-4 py-1">
                        <ul className="space-y-1.5">
                          {step.details.map((detail, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#007aff]" />
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
