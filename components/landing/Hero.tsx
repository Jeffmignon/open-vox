'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock, Target, Zap } from 'lucide-react'
import { track } from '@/lib/analytics'

const trustBullets = [
  {
    icon: Zap,
    text: 'From brief to send-ready in minutes',
  },
  {
    icon: Clock,
    text: 'Consistent cadence, zero drift',
  },
  {
    icon: Target,
    text: 'Built for lifecycle teams',
  },
]

export function Hero() {
  const handlePrimaryCTA = () => {
    track('cta_click', { location: 'hero', cta: 'get_sample' })
  }

  const handleSecondaryCTA = () => {
    track('cta_click', { location: 'hero', cta: 'see_pricing' })
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <GridPattern />
      </div>

      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="pill mb-6">Agentic Newsletter Production</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-1 mb-6 text-balance"
          >
            Newsletters that nurture and retain.
            <br />
            <span className="text-muted">Created by an agent.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="body-large max-w-2xl mx-auto mb-8"
          >
            Open Vox turns your audience goals into polished, on-brand newsletters.
            Define your brief, let the agent curate and write, then approve and send.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              href="#sample"
              onClick={handlePrimaryCTA}
              className="btn-primary group"
            >
              Generate a sample issue
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/pricing"
              onClick={handleSecondaryCTA}
              className="btn-secondary"
            >
              See pricing
            </Link>
          </motion.div>

          {/* Trust Bullets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
          >
            {trustBullets.map((bullet, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-muted"
              >
                <bullet.icon className="w-4 h-4" />
                <span>{bullet.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function GridPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.02]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 32V0h32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  )
}

export default Hero
