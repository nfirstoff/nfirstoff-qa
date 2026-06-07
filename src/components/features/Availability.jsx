import { motion } from "framer-motion"
import { MapPin, Globe, Briefcase, Download, Mail, ExternalLink, CheckCircle } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"
import Button from "../ui/Button"
import Badge from "../ui/Badge"
import { profile } from "../../data/profile"

export default function Availability() {
  return (
    <section id="availability" className="relative px-4 py-24 sm:py-32 bg-gray-50/50">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Open to Opportunities"
          subtitle="Currently available for QA roles in fintech and payment systems"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-3xl"
        >
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="border-b border-gray-200 bg-gradient-to-r from-brand-50 to-blue-50 px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{profile.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-medium text-emerald-700">Available</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-0.5">{profile.title}</p>
            </div>

            <div className="p-6 space-y-5">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-brand-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Location</p>
                    <p className="text-sm font-medium text-gray-900 mt-0.5">{profile.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="h-4 w-4 text-brand-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Languages</p>
                    <div className="mt-0.5 space-y-0.5">
                      {profile.languages.map((lang) => (
                        <p key={lang.name} className="text-sm text-gray-700">
                          {lang.name} — <span className="text-gray-500">{lang.level}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="h-4 w-4 text-brand-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Open to</p>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {profile.availability.openTo.map((item) => (
                        <Badge key={item} variant="brand">{item}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-5">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button href="#contact" variant="primary">
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </Button>
                  <Button
                    href={profile.linkedin}
                    variant="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button variant="ghost">
                    <Download className="h-4 w-4" />
                    Download CV
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 bg-gray-50 px-6 py-3">
              <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                Ready for full-time, contract, or freelance opportunities in fintech / payments
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
