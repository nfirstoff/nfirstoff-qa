import { motion } from "framer-motion"
import { Globe, Briefcase, Download, Mail, ExternalLink, CheckCircle } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"
import Button from "../ui/Button"
import Badge from "../ui/Badge"
import { profile } from "../../data/profile"

export default function Availability() {
  return (
    <section id="availability" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Professional Focus"
          subtitle="Manual QA for fintech, payment orchestration, crypto payments, and SaaS platforms"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-3xl"
        >
          <div className="rounded-2xl glass-card overflow-hidden">
            <div className="border-b border-white/60 bg-gradient-to-r from-[#007aff]/5 to-[#30b0c7]/5 px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{profile.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-medium text-emerald-700">Product-focused QA</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-0.5">{profile.title}</p>
            </div>

            <div className="p-6 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Globe className="h-4 w-4 text-[#007aff] mt-0.5 shrink-0" />
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
                  <Briefcase className="h-4 w-4 text-[#007aff] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Collaboration Mode</p>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {profile.availability.openTo.map((item) => (
                        <Badge key={item} variant="brand">{item}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/40 pt-5">
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

            <div className="border-t border-white/60 bg-white/40 px-6 py-3">
              <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
                <CheckCircle className="h-3.5 w-3.5 text-[#34c759]" />
                Full-time · Contract · Freelance — fintech, payments, crypto, SaaS, B2B
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
