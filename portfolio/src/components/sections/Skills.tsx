'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '@/lib/data'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeader from '@/components/shared/SectionHeader'

interface SkillBarProps {
  name: string
  level: number
  icon: string
  index: number
}

function SkillBar({ name, level, icon, index }: SkillBarProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="flex items-center gap-2 text-sm font-medium text-foreground">
          <span>{icon}</span>
          {name}
        </span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="section-padding">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Skills"
          title="Technical Toolkit"
          description="Languages, frameworks, and tools I use to build and ship software."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card gradient-border p-6 rounded-2xl"
          >
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              Languages
            </h3>
            <div className="space-y-4">
              {skills.languages.map((s, i) => (
                <SkillBar key={s.name} {...s} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card gradient-border p-6 rounded-2xl"
          >
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              Frameworks & Libraries
            </h3>
            <div className="space-y-4">
              {skills.frameworks.map((s, i) => (
                <SkillBar key={s.name} {...s} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card gradient-border p-6 rounded-2xl"
          >
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Databases
            </h3>
            <div className="space-y-4">
              {skills.databases.map((s, i) => (
                <SkillBar key={s.name} {...s} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Concepts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card gradient-border p-6 rounded-2xl"
          >
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Concepts & Practices
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.concepts.map((concept) => (
                <span key={concept} className="skill-badge">{concept}</span>
              ))}
            </div>

            <div className="mt-5 pt-5 border-t border-white/10">
              <h4 className="text-sm font-semibold text-foreground mb-3">Tools & Dev Environment</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <span key={tool} className="tag-badge">{tool}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="glass-card gradient-border p-6 rounded-2xl text-center"
        >
          <div className="text-sm text-muted-foreground font-medium mb-4">
            Also familiar with
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {['HTML5', 'CSS3', 'Bootstrap', 'REST APIs', 'MVC Pattern',
              'Session Auth', 'Git Flow', 'Linux CLI', 'Responsive Design', 'Cross-browser compatibility'].map((t) => (
              <span key={t} className="skill-badge">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
