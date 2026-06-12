import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Bot } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"

const aiBlocks = [
  {
    id: "doc-polishing",
    title: "Documentation Polishing and Formatting",
    body: "The workflow starts with low-risk tasks: rewriting and formatting specifications, bug reports, and onboarding documents to make them shorter, clearer, and more consistent. AI receives examples of an \u201cideal\u201d bug report or test plan so it can adapt style and structure to internal standards and templates.",
  },
  {
    id: "requirements",
    title: "Clarifying Requirements and Generating Test Ideas",
    body: "Next, AI helps break down complex payment scenarios (multi-currency, fees, limits, chargebacks, risk rules) and turn fuzzy requirements into concrete test ideas and checklists. User stories, acceptance criteria, and Swagger/OpenAPI fragments are provided, and the assistant suggests positive, negative, and boundary cases, which are then enriched with domain context and business-critical risks.",
  },
  {
    id: "test-design",
    title: "Test Design, Test Data, and Bug Reporting",
    body: "To speed up manual test design, AI generates test data tables: valid and invalid card data, currency combinations, transaction statuses, limits, and edge cases for rounding. When a defect is found, a free-form description of behavior and logs is converted into a structured bug report with clear steps, actual/expected results, and estimated impact, followed by manual review and refinement.",
  },
  {
    id: "code-snippets",
    title: "Code Snippets, QA Utilities, and API Checks",
    body: "AI is used to generate small scripts, SQL queries, and helper utilities that accelerate API checks, data validation, and preparation of repeatable regression scenarios. Typical outputs include helper scripts for data setup, payment gateway response verification, and fee or conversion validation, which are always reviewed and adapted to the target environments.",
  },
  {
    id: "incident-analysis",
    title: "Structured Research, Logs, and Incident Analysis",
    body: "During incidents, documentation, logs, and change history are consolidated, and AI is used to build a structured investigation path: hypotheses, risk areas, and recommended checks. The assistant groups errors, highlights anomalies, and suggests possible root causes, while final analysis, prioritization, and fix decisions remain under human control.",
  },
  {
    id: "test-strategy",
    title: "Project-Level Test Strategy and Refactoring",
    body: "At the project level, AI acts as a partner for test architecture discussions: refining test strategy, risk coverage, regression structure, and rules for exploratory sessions. The assistant also helps refactor existing helper scripts and testing utilities into cleaner, reusable modules to simplify maintenance and integration with automation.",
  },
  {
    id: "agent-workflows",
    title: "Agent Modes and Semi-Automated Workflows",
    body: "At the highest level, AI agents chain several steps into a single workflow: research, code generation, idea validation, data preparation, and result analysis. The agent proposes next actions\u2014what to check, which scenarios to extend, which logs to collect\u2014while key decisions, quality control, and ownership of money-related, risk-sensitive, and business-critical scenarios stay with the QA engineer.",
  },
]

export default function HowIUseAI() {
  const [expandedBlock, setExpandedBlock] = useState(null)

  const toggleBlock = (id) => {
    setExpandedBlock(expandedBlock === id ? null : id)
  }

  return (
    <section id="ai-usage" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="How I Use AI in QA"
          subtitle="From simple formatting to agent-driven workflows"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {aiBlocks.map((block) => {
            const isExpanded = expandedBlock === block.id
            return (
              <motion.div
                key={block.id}
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
                  onClick={() => toggleBlock(block.id)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#007aff]/10">
                      <Bot className="h-5 w-5 text-[#007aff]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">{block.title}</h3>
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
                      <div className="border-t border-white/40 px-5 py-4">
                        <p className="text-sm text-gray-600 leading-relaxed">{block.body}</p>
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
