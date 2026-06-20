'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, MapPin, Code2, Zap, ExternalLink } from 'lucide-react'
import { siteConfig, education } from '@/lib/data'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeader from '@/components/shared/SectionHeader'

const coreSkillsPreview = [
  'Python', 'Django', 'React.js', 'Node.js', 'MongoDB', 'MySQL',
  'REST APIs', 'JavaScript', 'Git', 'Agile'
]

export default function About() {
  return (
    <SectionWrapper id="about" className="section-padding bg-gradient-to-b from-transparent to-secondary/10">
      <div className="container-tight">
        <SectionHeader
          eyebrow="About Me"
          title="Who I Am"
          description="A software developer with a passion for building things that matter."
        />

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="glass-card gradient-border p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                  IK
                </div>
                <div>
                  <div className="font-semibold text-foreground">{siteConfig.name}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {siteConfig.location}
                  </div>
                </div>
              </div>

              {siteConfig.about.trim().split('\n\n').map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed text-sm mb-4 last:mb-0">
                  {para.trim()}
                </p>
              ))}

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-3">
                  Tech Stack Snapshot
                </div>
                <div className="flex flex-wrap gap-2">
                  {coreSkillsPreview.map((skill) => (
                    <span key={skill} className="tag-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Code2, label: 'Clean Code', desc: 'Readable & maintainable' },
                { icon: Zap, label: 'Performance', desc: 'Optimized systems' },
                { icon: GraduationCap, label: 'Learning', desc: 'Always growing' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="glass-card p-4 rounded-xl text-center hover:bg-white/5 transition-colors">
                  <Icon className="w-5 h-5 text-indigo-400 mx-auto mb-2" />
                  <div className="text-xs font-semibold text-foreground mb-0.5">{label}</div>
                  <div className="text-[10px] text-muted-foreground">{desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              Education
            </h3>

            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card gradient-border p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="font-semibold text-foreground text-sm group-hover:text-indigo-300 transition-colors">
                      {edu.degree}
                    </div>
                    <div className="text-sm text-muted-foreground mt-0.5">{edu.institution}</div>
                  </div>
                  {edu.status === 'current' && (
                    <span className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Current
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                  <span>·</span>
                  <span>{edu.duration}</span>
                </div>
                {edu.grade && (
                  <div className="mt-3 inline-flex items-center px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono font-medium">
                    {edu.grade}
                  </div>
                )}
              </motion.div>
            ))}

            {/* Extra info card */}
            <div className="glass-card p-6 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border border-indigo-500/15">
              <div className="text-sm font-semibold text-foreground mb-3">Languages Spoken</div>
              <div className="flex gap-3">
                {['English', 'Malayalam'].map((lang) => (
                  <span key={lang} className="skill-badge">{lang}</span>
                ))}
              </div>
              <div className="mt-4 text-sm font-semibold text-foreground mb-2">Currently Focused On</div>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                  Advanced backend architecture & system design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-purple-400 flex-shrink-0" />
                  AI/ML integration into web applications
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                  Open source contributions & DevOps basics
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
