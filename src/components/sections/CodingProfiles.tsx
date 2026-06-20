'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Star, Code, GitBranch, Users } from 'lucide-react'
import { siteConfig } from '@/lib/data'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeader from '@/components/shared/SectionHeader'

const profiles = [
  {
    name: 'GitHub',
    handle: '@Ibrahim-sys-ux',
    url: siteConfig.github,
    icon: '🐙',
    description: 'Open source projects, personal repos, and code contributions.',
    stats: [
      { label: 'Repos', value: '15+', icon: GitBranch },
      { label: 'Projects', value: '5+', icon: Code },
    ],
    gradient: 'from-gray-700/30 to-gray-800/30',
    border: 'border-gray-500/20',
    badge: 'bg-gray-500/10 text-gray-300 border-gray-500/20',
  },
  {
    name: 'LinkedIn',
    handle: 'ibrahim-kutty',
    url: siteConfig.linkedin,
    icon: '💼',
    description: 'Professional network, work history, and industry connections.',
    stats: [
      { label: 'Connections', value: '200+', icon: Users },
      { label: 'Profile Views', value: 'Growing', icon: Star },
    ],
    gradient: 'from-blue-700/20 to-blue-800/20',
    border: 'border-blue-500/20',
    badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  },
  {
    name: 'LeetCode',
    handle: 'ibrahim-kutty',
    url: siteConfig.leetcode,
    icon: '⚡',
    description: 'Data structures, algorithms, and competitive problem solving.',
    stats: [
      { label: 'Problems', value: '100+', icon: Code },
      { label: 'Contest', value: 'Active', icon: Star },
    ],
    gradient: 'from-yellow-700/20 to-orange-700/20',
    border: 'border-yellow-500/20',
    badge: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
  },
  {
    name: 'CodeChef',
    handle: 'ibrahim-kutty',
    url: siteConfig.codechef,
    icon: '👨‍🍳',
    description: 'Competitive programming, contests, and algorithmic challenges.',
    stats: [
      { label: 'Stars', value: '2★', icon: Star },
      { label: 'Contests', value: 'Active', icon: Code },
    ],
    gradient: 'from-brown-700/20 to-amber-800/20',
    border: 'border-amber-500/20',
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
  },
]

export default function CodingProfiles() {
  return (
    <SectionWrapper id="coding-profiles" className="section-padding">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Online Presence"
          title="Find Me Online"
          description="Where I build, network, and sharpen my problem-solving skills."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profiles.map((profile, i) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`glass-card gradient-border rounded-2xl p-5 group hover:bg-white/5 transition-all duration-300 flex flex-col`}
            >
              {/* Icon & Platform */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{profile.icon}</div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>

              <div className="mb-3">
                <div className="font-bold text-foreground text-base mb-0.5 group-hover:text-indigo-300 transition-colors">
                  {profile.name}
                </div>
                <div className="text-xs text-muted-foreground font-mono">{profile.handle}</div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                {profile.description}
              </p>

              <div className="grid grid-cols-2 gap-2">
                {profile.stats.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="text-center p-2 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-sm font-bold text-foreground">{value}</div>
                    <div className="text-[10px] text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
