import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Search, Bug, AlertTriangle, Code2, Network, AlertCircle } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"
import Badge from "../ui/Badge"
import FilterChips from "../ui/FilterChips"
import SearchBar from "../ui/SearchBar"
import { bugReports, bugReportFilters } from "../../data/bugReports"

function SeverityBadge({ severity }) {
  const variant = severity === "Critical" ? "critical" : severity === "High" ? "high" : "medium"
  return <Badge variant={variant}>{severity}</Badge>
}

function ExpandableSection({ icon: Icon, title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? contentRef.current.scrollHeight : 0)
    }
  }, [open])

  return (
    <div className="border border-white/60 rounded-xl bg-white/30 backdrop-blur-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-2 bg-white/40 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 hover:bg-white/60 transition-colors rounded-xl"
      >
        <span className="flex items-center gap-2">
          {Icon && <Icon className="h-3.5 w-3.5 text-[#007aff]" />}
          {title}
        </span>
        <ChevronDown className={`h-3.5 w-3.5 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div ref={contentRef} className="px-3 py-3 text-sm text-gray-600 space-y-2">
          {children}
        </div>
      </motion.div>
    </div>
  )
}

export default function BugReportGallery() {
  const [search, setSearch] = useState("")
  const [activeFilter, setActiveFilter] = useState(null)

  const filtered = bugReports.filter((report) => {
    const matchSearch =
      !search ||
      report.title.toLowerCase().includes(search.toLowerCase()) ||
      report.summary.toLowerCase().includes(search.toLowerCase()) ||
      report.category.toLowerCase().includes(search.toLowerCase())
    const matchFilter = !activeFilter || report.tags.includes(activeFilter)
    return matchSearch && matchFilter
  })

  return (
    <section id="bugs" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Real Bugs I Investigated"
          subtitle="Examples of real QA investigations, root cause analysis, and business impact"
        />

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1 max-w-md">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search bug investigations..."
            />
          </div>
          <FilterChips
            filters={bugReportFilters}
            active={activeFilter}
            onChange={setActiveFilter}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((report) => (
            <motion.div
              key={report.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl glass-card transition-all duration-200 overflow-hidden"
            >
              <div className="p-5">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Bug className="h-4 w-4 text-[#007aff] shrink-0 mt-0.5" />
                    <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                      {report.title}
                    </h3>
                  </div>
                  <SeverityBadge severity={report.severity} />
                </div>

                <div className="mb-3 flex flex-wrap gap-1.5">
                  <Badge variant="default">{report.category.split("/")[0].trim()}</Badge>
                  {report.category.includes("/") && (
                    <Badge variant="default">{report.category.split("/")[1].trim()}</Badge>
                  )}
                </div>

                <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                  {report.summary}
                </p>

                <div className="space-y-2">
                  <ExpandableSection icon={RepeatIcon} title="Reproduction Steps">
                    <ol className="list-decimal pl-4 space-y-1 text-xs text-gray-600">
                      {report.sections.reproduction.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </ExpandableSection>

                  <ExpandableSection icon={Network} title="Investigation Process">
                    <div className="space-y-2">
                      {report.sections.investigation.map((item, i) => (
                        <div key={i} className="flex gap-2 text-xs">
                          <div className="flex flex-col items-center">
                            <div className="h-2 w-2 rounded-full bg-brand-500 shrink-0 mt-1" />
                            {i < report.sections.investigation.length - 1 && (
                              <div className="w-px flex-1 bg-gray-200" />
                            )}
                          </div>
                          <div className="pb-2">
                            <span className="font-medium text-gray-700">{item.step}</span>
                            <p className="text-gray-500 mt-0.5">{item.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ExpandableSection>

                  <ExpandableSection icon={Search} title="Root Cause">
                    <div className="rounded-xl bg-[#ff9500]/10 border border-[#ff9500]/20 p-3 text-xs text-amber-700 backdrop-blur-sm">
                      <p>{report.sections.rootCause}</p>
                    </div>
                  </ExpandableSection>

                  <ExpandableSection icon={AlertCircle} title="Business Impact">
                    <div className="rounded-xl bg-[#ff3b30]/10 border border-[#ff3b30]/20 p-3 text-xs text-red-700 backdrop-blur-sm">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                        <p>{report.sections.businessImpact}</p>
                      </div>
                    </div>
                  </ExpandableSection>

                  {report.sections.technicalDetails && (
                    <ExpandableSection icon={Code2} title="Technical Details">
                      <div className="space-y-2">
                        {report.sections.technicalDetails.code && (
                          <div>
                            <p className="text-xs font-medium text-gray-700 mb-1">Code:</p>
                            <pre className="rounded-xl bg-gray-900/90 backdrop-blur-sm p-3 text-xs text-green-400 overflow-x-auto font-mono leading-relaxed border border-white/10">
                              {report.sections.technicalDetails.code}
                            </pre>
                          </div>
                        )}
                        {report.sections.technicalDetails.apiExample && (
                          <div className="grid gap-2 sm:grid-cols-2">
                            <div>
                              <p className="text-xs font-medium text-gray-700 mb-1">Request:</p>
                              <pre className="rounded-xl bg-gray-900/90 backdrop-blur-sm p-3 text-xs text-blue-300 overflow-x-auto font-mono leading-relaxed border border-white/10">
                                {report.sections.technicalDetails.apiExample.request}
                              </pre>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-gray-700 mb-1">Response:</p>
                              <pre className="rounded-xl bg-gray-900/90 backdrop-blur-sm p-3 text-xs text-green-300 overflow-x-auto font-mono leading-relaxed border border-white/10">
                                {report.sections.technicalDetails.apiExample.response}
                              </pre>
                            </div>
                          </div>
                        )}
                      </div>
                    </ExpandableSection>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <Search className="mx-auto h-8 w-8 text-gray-300" />
            <p className="mt-3 text-sm text-gray-500">No bug reports match your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}

function RepeatIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  )
}
