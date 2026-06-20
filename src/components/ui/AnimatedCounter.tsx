'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = value / (duration / 16)
    const timer = setInterval(() => {
      start = Math.min(start + step, value)
      setCount(Math.floor(start))
      if (start >= value) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value, duration])

  return <span ref={ref}>{count}</span>
}
