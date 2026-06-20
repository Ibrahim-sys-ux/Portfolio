'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { achievements } from '@/lib/data'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeader from '@/components/shared/SectionHeader'

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" className="section-padding bg-gradient-to-b from-transparent to-secondary/10">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Achievements"
          title="Milestones & Recognition"
          description="Certifications, awards, and academic milestones that mark my journey."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`glass-card gradient-border rounded-2xl p-6 overflow-hidden relative group transition-all duration-300 hover:bg-white/5`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-50 pointer-events-none`} />

              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl flex-shrink-0">{achievement.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-base leading-tight mb-1 group-hover:text-indigo-300 transition-colors">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Award className="w-3 h-3" />
                      {achievement.issuer}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-muted-foreground flex-shrink-0 bg-white/5 px-2 py-1 rounded-lg border border-white/10">
                    {achievement.date}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interpersonal skills banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 glass-card p-6 rounded-2xl bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-blue-500/5 border border-white/10"
        >
          <div className="text-center mb-4">
            <div className="text-sm font-semibold text-foreground">Interpersonal Skills</div>
            <div className="text-xs text-muted-foreground mt-1">Beyond the code</div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Problem-Solving', 'Analytical Thinking', 'Teamwork & Collaboration',
              'Effective Communication', 'Detail-Oriented', 'Time Management'].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="skill-badge cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
