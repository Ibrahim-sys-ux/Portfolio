'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, ExternalLink, CheckCircle2, Zap } from 'lucide-react'
import { experiences } from '@/lib/data'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeader from '@/components/shared/SectionHeader'

const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  indigo: {
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/30',
    text: 'text-indigo-300',
    dot: 'bg-indigo-500',
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-300',
    dot: 'bg-purple-500',
  },
}

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="section-padding">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Experience"
          title="Work History"
          description="Hands-on engineering experience building real products in production environments."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const colors = colorMap[exp.color] || colorMap.indigo
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-2.5 md:left-6 top-6 w-4 h-4 rounded-full ${colors.dot} ring-4 ring-background flex items-center justify-center`}>
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Card */}
                  <div className={`glass-card gradient-border rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-all duration-300 group`}>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-indigo-300 transition-colors mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-semibold text-muted-foreground">{exp.company}</span>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full ${colors.bg} ${colors.border} ${colors.text} text-[10px] font-medium border`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 text-xs text-muted-foreground sm:text-right flex-shrink-0">
                        <span className="flex items-center gap-1 sm:justify-end">
                          <Calendar className="w-3 h-3" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1 sm:justify-end">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Highlight badge */}
                    {exp.highlight && (
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${colors.bg} ${colors.border} ${colors.text} text-xs font-semibold border mb-4`}>
                        <Zap className="w-3 h-3" />
                        {exp.highlight}
                      </div>
                    )}

                    {/* Description bullets */}
                    <ul className="space-y-2.5 mb-5">
                      {exp.description.map((point, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2 className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tag-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Future marker */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative pl-12 md:pl-20"
            >
              <div className="absolute left-2.5 md:left-6 top-3 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 ring-4 ring-background animate-pulse" />
              <div className="glass-card p-5 rounded-2xl border-dashed border-2 border-white/10 bg-gradient-to-br from-indigo-500/5 to-purple-500/5">
                <div className="text-sm font-semibold text-foreground mb-1">Next Opportunity</div>
                <div className="text-sm text-muted-foreground">Open to full-time SDE, Full Stack, and Backend Engineer roles.</div>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Let's talk <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
