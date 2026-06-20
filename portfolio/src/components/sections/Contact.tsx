'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail, Phone, MapPin, Github, Linkedin,
  Send, Copy, Check, ExternalLink, MessageCircle
} from 'lucide-react'
import { siteConfig } from '@/lib/data'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeader from '@/components/shared/SectionHeader'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('sending')
    // EmailJS integration placeholder
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <SectionWrapper id="contact" className="section-padding bg-gradient-to-b from-transparent to-secondary/10">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Contact"
          title="Get In Touch"
          description="Have a role in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="glass-card gradient-border p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="w-5 h-5 text-indigo-400" />
                <h3 className="font-bold text-foreground">Let's work together</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm currently open to full-time Software Engineer and Full Stack Developer roles.
                If you have an exciting project or opportunity, drop me a message and I'll get back to you promptly.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              {/* Email */}
              <div className="glass-card p-4 rounded-xl flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm font-medium text-foreground hover:text-indigo-300 transition-colors truncate block">
                    {siteConfig.email}
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200"
                  title="Copy email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="glass-card p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground mb-0.5">Phone</div>
                  <a href={`tel:${siteConfig.phone}`} className="text-sm font-medium text-foreground hover:text-purple-300 transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="glass-card p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground mb-0.5">Location</div>
                  <div className="text-sm font-medium text-foreground">{siteConfig.location}</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card p-4 rounded-xl">
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-3">
                Social Profiles
              </div>
              <div className="flex gap-3">
                {[
                  { icon: Github, url: siteConfig.github, label: 'GitHub', color: 'hover:text-foreground' },
                  { icon: Linkedin, url: siteConfig.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
                  { icon: Mail, url: `mailto:${siteConfig.email}`, label: 'Email', color: 'hover:text-indigo-400' },
                ].map(({ icon: Icon, url, label, color }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground ${color} transition-all duration-200 hover:bg-white/10`}
                    title={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-card gradient-border p-6 md:p-8 rounded-2xl">
              <h3 className="font-bold text-foreground mb-6">Send a Message</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 text-sm outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 text-sm outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Role opportunity / Collaboration / Hello"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 text-sm outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about the opportunity or how I can help..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 text-sm outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={status === 'sending' || status === 'sent'}
                  className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30"
                >
                  {status === 'idle' && (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                  {status === 'sending' && (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === 'sent' && (
                    <>
                      <Check className="w-4 h-4 text-green-300" />
                      Message Sent!
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      <Send className="w-4 h-4" />
                      Try Again
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Or reach me directly at{' '}
                  <a href={`mailto:${siteConfig.email}`} className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
