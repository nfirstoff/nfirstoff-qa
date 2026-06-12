import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, Download, X, Eye, CheckCircle2, Bug, FileCheck } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"
import Badge from "../ui/Badge"
import Button from "../ui/Button"
import { profile } from "../../data/profile"

const docSamples = {
  "Bug Report Sample": {
    type: "Bug Report",
    content: {
      title: "Payment Status Not Updating in CRM After Successful Transaction",
      environment: "Staging · Payment Gateway v2.1 · CRM v3.4",
      severity: "High",
      priority: "P1",
      steps: [
        "Log in as admin",
        "Navigate to Orders > Active Orders",
        "Process payment for order #ORD-48291",
        "Verify payment status in CRM",
        "Refresh page after 30 seconds",
      ],
      expected: "Payment status updates to 'Completed' within 5 seconds",
      actual: "Payment status remains 'Pending' indefinitely",
      technical: "Webhook from payment service not reaching CRM. Network timeout with no retry mechanism.",
      logs: "[2024-03-15 14:32:18] ERROR webhook.delivery: Failed to deliver webhook to CRM (timeout)\n[2024-03-15 14:32:18] WARN webhook.retry: No retry configured, dropping event",
    },
  },
  "QA Checklist Sample": {
    type: "Checklist",
    content: {
      title: "Payment Gateway Release — Regression Checklist",
      items: [
        { area: "Payment Creation", checks: ["Create payment with valid card", "Create payment with expired card", "Create payment with insufficient funds", "Verify idempotency on retry"] },
        { area: "Webhook Delivery", checks: ["Verify webhook sent on success", "Verify webhook sent on failure", "Verify retry mechanism on timeout", "Verify idempotency key handling"] },
        { area: "Database Integrity", checks: ["Transaction record matches payment response", "Status transitions follow state machine", "No orphaned records after timeout"] },
        { area: "CRM Sync", checks: ["CRM order status matches payment status", "Transaction amount matches in both systems", "Refund status propagates correctly"] },
      ],
    },
  },
  "Test Case Sample": {
    type: "Test Case",
    content: {
      title: "TC-042: Subscription Renewal — Successful Recurring Payment",
      preconditions: [
        "User has active subscription with auto-renewal enabled",
        "Valid payment method on file",
        "Renewal date is today",
      ],
      steps: [
        { action: "Trigger renewal cron job", expected: "Cron initiates payment processing" },
        { action: "Verify API call to payment provider", expected: "POST /charge with correct amount and currency" },
        { action: "Simulate successful payment response", expected: "200 OK with transaction ID" },
        { action: "Verify subscription status", expected: "Subscription status remains 'Active'" },
        { action: "Verify next renewal date", expected: "Next renewal date is +1 month" },
        { action: "Verify notification", expected: "User receives renewal confirmation email" },
      ],
    },
  },
  "API Validation Checklist": {
    type: "API Checklist",
    content: {
      title: "Payment API Endpoint Validation",
      endpoints: [
        { method: "POST", path: "/api/v1/charges", checks: ["Request payload validation", "Idempotency key handling", "Error response structure", "Rate limiting headers", "Authentication required"] },
        { method: "GET", path: "/api/v1/charges/:id", checks: ["Response includes all required fields", "404 for non-existent charge", "Authorization check"] },
        { method: "POST", path: "/api/v1/webhooks", checks: ["Signature verification", "Payload structure validation", "Idempotency processing", "Response time under 500ms"] },
      ],
      validationRules: [
        "All responses include request_id for tracing",
        "Error responses follow RFC 7807 Problem Details",
        "Status codes: 200 success, 400 validation, 401 auth, 404 not found, 409 conflict, 500 server error",
        "All mutation endpoints require idempotency key",
      ],
    },
  },
}

function BugReportPreview({ doc }) {
  const data = doc.content
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-base font-semibold text-gray-900">{data.title}</h4>
        <p className="text-xs text-gray-500 mt-0.5">{data.environment}</p>
      </div>
      <div className="flex gap-2">
        <Badge variant={data.severity === "High" ? "high" : "medium"}>{data.severity}</Badge>
        <Badge variant="default">{data.priority}</Badge>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Reproduction Steps</p>
        <ol className="list-decimal pl-4 space-y-0.5 text-sm text-gray-600">
          {data.steps.map((s, i) => <li key={i}>{s}</li>)}
        </ol>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
          <p className="text-xs font-medium text-emerald-800">Expected Result</p>
          <p className="text-xs text-emerald-700 mt-0.5">{data.expected}</p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-3">
          <p className="text-xs font-medium text-red-800">Actual Result</p>
          <p className="text-xs text-red-700 mt-0.5">{data.actual}</p>
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Technical Details</p>
        <p className="text-sm text-gray-600">{data.technical}</p>
      </div>
      {data.logs && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Logs</p>
          <pre className="rounded-xl bg-[var(--code-bg)] backdrop-blur-sm p-3 text-xs text-green-400 font-mono overflow-x-auto border border-white/10">{data.logs}</pre>
        </div>
      )}
    </div>
  )
}

function ChecklistPreview({ doc }) {
  const data = doc.content
  const [checked, setChecked] = useState({})

  const getItemId = (sectionIdx, checkIdx) => `item-${sectionIdx}-${checkIdx}`

  const totalItems = data.items.reduce((sum, s) => sum + s.checks.length, 0)
  const allChecked = Object.values(checked).filter(Boolean).length === totalItems

  const toggleCheck = (sectionIdx, checkIdx) => {
    const id = getItemId(sectionIdx, checkIdx)
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <h4 className={`text-base font-semibold transition-colors ${allChecked ? "text-emerald-600" : "text-gray-900"}`}>{data.title}</h4>
        {allChecked && (
          <span className="inline-block rounded-md bg-emerald-500 px-2.5 py-0.5 text-xs font-bold text-[#ffffff]">
            Passed
          </span>
        )}
      </div>
      {data.items.map((section, i) => (
        <div key={i}>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">{section.area}</p>
          <ul className="space-y-1">
            {section.checks.map((check, j) => {
              const id = getItemId(i, j)
              const isChecked = !!checked[id]
              return (
                <li
                  key={j}
                  className="flex cursor-pointer items-start gap-2 rounded px-1 -mx-1 text-sm text-gray-600 transition-colors hover:bg-gray-50"
                  onClick={() => toggleCheck(i, j)}
                >
                  <span
                    className={`mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border transition-colors ${
                      isChecked ? "border-brand-500 bg-brand-500 text-[#ffffff]" : "border-gray-300"
                    }`}
                  >
                    {isChecked && (
                      <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  {check}
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}

function TestCasePreview({ doc }) {
  const data = doc.content
  return (
    <div className="space-y-4">
      <h4 className="text-base font-semibold text-gray-900">{data.title}</h4>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Preconditions</p>
        <ul className="list-disc pl-4 space-y-0.5 text-sm text-gray-600">
          {data.preconditions.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Test Steps</p>
        <div className="space-y-2">
          {data.steps.map((step, i) => (
            <div key={i} className="grid gap-1 sm:grid-cols-2 text-sm">
              <div className="rounded-lg bg-gray-50 p-2.5 text-gray-600">
                <span className="text-xs text-gray-400">Step {i + 1}:</span> {step.action}
              </div>
              <div className="rounded-lg bg-emerald-50 p-2.5 text-emerald-700">
                <span className="text-xs text-emerald-500">Expected:</span> {step.expected}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ApiChecklistPreview({ doc }) {
  const data = doc.content
  return (
    <div className="space-y-4">
      <h4 className="text-base font-semibold text-gray-900">{data.title}</h4>
      {data.endpoints.map((ep, i) => (
        <div key={i} className="rounded-lg border border-gray-200 p-3">
          <div className="flex items-center gap-2 mb-2">
            <span className={`rounded px-1.5 py-0.5 text-xs font-mono font-bold ${
              ep.method === "POST" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
            }`}>{ep.method}</span>
            <span className="text-sm font-mono text-gray-700">{ep.path}</span>
          </div>
          <ul className="space-y-0.5">
            {ep.checks.map((check, j) => (
              <li key={j} className="flex items-start gap-1.5 text-xs text-gray-600">
                <CheckCircle2 className="h-3 w-3 text-emerald-500 mt-0.5 shrink-0" />
                {check}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Validation Rules</p>
        <ul className="space-y-0.5">
          {data.validationRules.map((rule, i) => (
            <li key={i} className="flex items-start gap-1.5 text-sm text-gray-600">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const previewComponents = {
  "Bug Report Sample": BugReportPreview,
  "QA Checklist Sample": ChecklistPreview,
  "Test Case Sample": TestCasePreview,
  "API Validation Checklist": ApiChecklistPreview,
}

const typeIcons = {
  "Bug Report": Bug,
  "Checklist": FileCheck,
  "Test Case": FileText,
  "API Checklist": FileText,
}

export default function QADocs() {
  const [modalDoc, setModalDoc] = useState(null)

  return (
    <section id="qa-docs" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="QA Documentation Samples"
          subtitle="Examples of structured QA artifacts"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profile.qaDocuments.map((doc) => {
            const sample = docSamples[doc.title]
            const Icon = typeIcons[sample?.type] || FileText
            return (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl glass-card p-5 transition-all duration-200 cursor-pointer"
                onClick={() => setModalDoc(doc.title === modalDoc ? null : doc.title)}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#007aff]/10 text-[#007aff] group-hover:bg-[#007aff]/20 transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{doc.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{doc.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="default">{sample?.type || "Document"}</Badge>
                  <Eye className="h-4 w-4 text-gray-300 group-hover:text-[#007aff] transition-colors" />
                </div>
              </motion.div>
            )
          })}
        </div>

        <AnimatePresence>
          {modalDoc && docSamples[modalDoc] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 backdrop-blur-md"
              onClick={() => setModalDoc(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
                className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-[var(--modal-bg)] shadow-xl border border-[var(--modal-border)]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 flex items-center justify-between border-b border-[var(--modal-border)] bg-[var(--modal-bg)] px-6 py-4">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[#007aff]" />
                    <h3 className="text-base font-semibold text-gray-900">{modalDoc}</h3>
                  </div>
                  <button
                    onClick={() => setModalDoc(null)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-6">
                  {(() => {
                    const PreviewComponent = previewComponents[modalDoc]
                    const sample = docSamples[modalDoc]
                    return PreviewComponent ? <PreviewComponent doc={sample} /> : null
                  })()}
                </div>
                <div className="border-t border-[var(--modal-border)] px-6 py-4 flex justify-end">
                  <Button variant="secondary">
                    <Download className="h-4 w-4" />
                    Download {docSamples[modalDoc]?.type || "Document"}
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
