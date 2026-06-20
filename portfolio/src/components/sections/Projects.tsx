'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Clock, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/data'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeader from '@/components/shared/SectionHeader'

const accentMap: Record<string, { glow: string; badge: string; badgeText: string }> = {
  indigo: {
    glow: 'group-hover:shadow-indigo-500/20',
    badge: 'bg-indigo-500/10 border-indigo-500/20',
    badgeText: 'text-indigo-300',
  },
  blue: {
    glow: 'group-hover:shadow-blue-500/20',
    badge: 'bg-blue-500/10 border-blue-500/20',
    badgeText: 'text-blue-300',
  },
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="section-padding bg-gradient-to-b from-transparent to-secondary/5">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Projects"
          title="What I've Built"
          description="Production-grade applications built with a focus on performance, scalability, and clean architecture."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const accent = accentMap[project.accentColor] || accentMap.indigo
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`glass-card gradient-border rounded-2xl overflow-hidden group hover:bg-white/5 hover:shadow-2xl ${accent.glow} transition-all duration-500 flex flex-col`}
              >
                {/* Project header banner */}
                <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="relative text-center px-6">
                    <div className="text-4xl mb-2">
                      {project.accentColor === 'indigo' ? '🏪' : '💼'}
                    </div>
                    <div className="text-sm font-semibold text-foreground/80">{project.title}</div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-[10px] font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Title & Duration */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-indigo-300 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <span className={`flex-shrink-0 flex items-center gap-1 px-2 py-1 rounded-lg ${accent.badge} ${accent.badgeText} text-[10px] font-medium border`}>
                      <Clock className="w-3 h-3" />
                      {project.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-5 flex-1">
                    {project.features.slice(0, 3).map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag-badge">{tech}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors ml-auto"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="ml-auto text-xs text-muted-foreground italic">Local / Private</span>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/Ibrahim-sys-ux"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-foreground font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4" />
            View all projects on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
