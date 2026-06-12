import { motion } from "framer-motion"
import SectionTitle from "../ui/SectionTitle"
import { profile } from "../../data/profile"

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group"
    >
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 transition-colors group-hover:text-brand-600">
          {name}
        </span>
        <span className="text-xs font-mono text-gray-400">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-gray-200/50">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.04, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[#007aff] to-[#30b0c7]"
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with daily"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {profile.skillCategories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl glass-card p-6 sm:p-8"
            >
              <h3 className="mb-5 text-base font-semibold text-gray-900">
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={i}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
