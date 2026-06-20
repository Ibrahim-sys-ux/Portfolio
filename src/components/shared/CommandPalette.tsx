'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Terminal, User, Briefcase, Code2, Star, Mail,
  Github, Linkedin, FileDown, Search, X, ArrowRight
} from 'lucide-react'
import { siteConfig } from '@/lib/data'

interface Command {
  id: string
  label: string
  description: string
  icon: React.ReactNode
  action: () => void
  category: string
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  const commands: Command[] = [
    { id: 'about', label: 'About Me', description: 'Learn more about Ibrahim', icon: <User className="w-4 h-4" />, action: () => scrollTo('about'), category: 'Navigate' },
    { id: 'experience', label: 'Experience', description: 'View work experience', icon: <Briefcase className="w-4 h-4" />, action: () => scrollTo('experience'), category: 'Navigate' },
    { id: 'projects', label: 'Projects', description: 'Browse project portfolio', icon: <Code2 className="w-4 h-4" />, action: () => scrollTo('projects'), category: 'Navigate' },
    { id: 'skills', label: 'Skills', description: 'Technical skills overview', icon: <Terminal className="w-4 h-4" />, action: () => scrollTo('skills'), category: 'Navigate' },
    { id: 'achievements', label: 'Achievements', description: 'Certifications & wins', icon: <Star className="w-4 h-4" />, action: () => scrollTo('achievements'), category: 'Navigate' },
    { id: 'contact', label: 'Contact', description: 'Get in touch', icon: <Mail className="w-4 h-4" />, action: () => scrollTo('contact'), category: 'Navigate' },
    { id: 'github', label: 'GitHub', description: 'View GitHub profile', icon: <Github className="w-4 h-4" />, action: () => { window.open(siteConfig.github, '_blank'); setOpen(false) }, category: 'Links' },
    { id: 'linkedin', label: 'LinkedIn', description: 'Connect on LinkedIn', icon: <Linkedin className="w-4 h-4" />, action: () => { window.open(siteConfig.linkedin, '_blank'); setOpen(false) }, category: 'Links' },
    { id: 'resume', label: 'Download Resume', description: 'Get PDF resume', icon: <FileDown className="w-4 h-4" />, action: () => { window.open('/resume.pdf', '_blank'); setOpen(false) }, category: 'Actions' },
    { id: 'email', label: 'Copy Email', description: siteConfig.email, icon: <Mail className="w-4 h-4" />, action: () => { navigator.clipboard.writeText(siteConfig.email); setOpen(false) }, category: 'Actions' },
  ]

  const filtered = query
    ? commands.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.description.toLowerCase().includes(query.toLowerCase())
      )
    : commands

  const grouped = filtered.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = []
    acc[cmd.category].push(cmd)
    return acc
  }, {} as Record<string, Command[]>)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }

    const handleCustom = () => setOpen(true)

    window.addEventListener('keydown', handleKey)
    window.addEventListener('open-command-palette', handleCustom)
    return () => {
      window.removeEventListener('keydown', handleKey)
      window.removeEventListener('open-command-palette', handleCustom)
    }
  }, [])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
      setQuery('')
      setSelected(0)
    }
  }, [open])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelected((s) => Math.min(s + 1, filtered.length - 1))
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelected((s) => Math.max(s - 1, 0))
      }
      if (e.key === 'Enter') {
        filtered[selected]?.action()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, filtered, selected])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="cmd-overlay fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[101] w-full max-w-lg mx-4"
          >
            <div className="glass-card rounded-2xl shadow-2xl shadow-black/50 overflow-hidden border border-white/10">
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setSelected(0) }}
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                />
                <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Commands list */}
              <div className="max-h-80 overflow-y-auto py-2">
                {Object.entries(grouped).map(([category, cmds]) => (
                  <div key={category}>
                    <div className="px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {category}
                    </div>
                    {cmds.map((cmd, i) => {
                      const globalIndex = filtered.indexOf(cmd)
                      return (
                        <button
                          key={cmd.id}
                          onClick={cmd.action}
                          onMouseEnter={() => setSelected(globalIndex)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-100 ${
                            selected === globalIndex
                              ? 'bg-indigo-500/15 text-foreground'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          <span className={`flex-shrink-0 ${selected === globalIndex ? 'text-indigo-400' : ''}`}>
                            {cmd.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium">{cmd.label}</div>
                            <div className="text-xs text-muted-foreground truncate">{cmd.description}</div>
                          </div>
                          {selected === globalIndex && (
                            <ArrowRight className="w-3 h-3 text-indigo-400 flex-shrink-0" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                ))}
                {filtered.length === 0 && (
                  <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                    No results for &quot;{query}&quot;
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 px-4 py-2 border-t border-white/10 text-[10px] text-muted-foreground">
                <span>↑↓ navigate</span>
                <span>↵ select</span>
                <span>esc close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
