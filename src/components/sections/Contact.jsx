import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"
import Button from "../ui/Button"
import { profile } from "../../data/profile"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")
    const subject = encodeURIComponent(`Contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`, "_blank")
    setSubmitted(true)
    form.reset()
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="relative px-4 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#007aff]/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          title="Get in Touch"
          subtitle="Have a project, role, or collaboration in mind? Let's talk."
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="space-y-5 rounded-2xl glass-card p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#007aff]/10 text-[#007aff]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Email</h4>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm text-gray-500 transition-colors hover:text-[#007aff]"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="border-t border-white/40 pt-5">
                <p className="text-sm italic text-gray-500">
                  {profile.contactNote}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl glass-card p-6 sm:p-8">
              <div className="mb-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-500">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl glass-input px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-[#007aff]/30 focus:ring-2 focus:ring-[#007aff]/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-500">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-xl glass-input px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-[#007aff]/30 focus:ring-2 focus:ring-[#007aff]/20"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-500">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-xl glass-input px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-[#007aff]/30 focus:ring-2 focus:ring-[#007aff]/20"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full justify-center sm:w-auto">
                {submitted ? "Message Sent!" : "Send Message"}
                {submitted ? null : <ArrowRight className="h-4 w-4" />}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
