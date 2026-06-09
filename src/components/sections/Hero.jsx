import { motion } from "framer-motion"
import { ArrowDown, ArrowRight } from "lucide-react"
import Button from "../ui/Button"
import { profile } from "../../data/profile"
import AboutTagsMarquee from "../features/AboutTagsMarquee"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50/50 via-white to-white" />
      <div className="pointer-events-none absolute top-0 -left-32 h-96 w-96 rounded-full bg-brand-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-900"
        >
          {profile.name.split(" ")[0]}{" "}
          <span className="text-brand-600">
            {profile.name.split(" ")[1]}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 sm:text-xl"
        >
          {profile.title} specializing in{" "}
          <span className="font-semibold text-gray-900">{profile.tagline}</span>.
          <span className="block">I ensure financial systems are reliable, secure, and production-ready.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.30 }}
          className="mx-auto mt-4 max-w-lg"
        >
          <AboutTagsMarquee />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <Button href="#portfolio" variant="primary">
            <ArrowRight className="h-4 w-4" />
            View My Portfolio
          </Button>
          <Button href="#contact" variant="secondary">
            Contact Me
          </Button>
          <Button
            href={profile.linkedin}
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-400"
        >
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Fintech & Payment Systems QA
          </span>
          <span className="hidden sm:inline">{profile.email}</span>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 transition-colors hover:text-brand-600"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  )
}
