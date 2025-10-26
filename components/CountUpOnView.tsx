'use client'

import { useState, useEffect, useRef } from 'react'

export default function CountUpOnView({
  end,
  duration = 2000,
  suffix = '+',
}: {
  end: number
  duration?: number
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const increment = end / (duration / 16) // ~60fps
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              clearInterval(timer)
              setCount(end)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return (
    <div ref={ref}>
      <h3>{count}{suffix}</h3>
    </div>
  )
}
