import { motion } from "framer-motion"
import SectionTitle from "../ui/SectionTitle"
import Badge from "../ui/Badge"
import { profile } from "../../data/profile"


function StatCard({ stat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-2xl glass-card p-4 text-center"
    >
      <div className="text-2xl font-bold text-brand-600 sm:text-3xl">
        {stat.value}
      </div>
      <div className="mt-1 text-xs text-gray-500">{stat.label}</div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="About Me" subtitle="A QA engineer passionate about quality in financial technology" />

        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-3xl glass-card sm:w-72 lg:w-full">
              <img
                src={`${import.meta.env.BASE_URL}photo.jpg`}
                alt="Mykola Firstov"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <blockquote className="mb-5 border-l-2 border-[#007aff] pl-4 text-lg italic text-gray-600">
              &ldquo;{profile.aboutHighlight}&rdquo;
            </blockquote>

            <p className="mb-6 text-sm leading-relaxed text-gray-500">
              {profile.summary}
            </p>

            <div className="mb-8">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Key Strengths
              </h4>
              <div className="flex flex-wrap gap-2">
                {profile.strengths.map((s) => (
                  <Badge key={s} variant="brand">{s}</Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {profile.stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
