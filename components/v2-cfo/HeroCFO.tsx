'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TrendingDown, Clock, DollarSign, Building2 } from 'lucide-react'
import { track } from '@/lib/analytics'

const trustMetrics = [
  {
    icon: DollarSign,
    value: '$127K',
    label: 'avg. annual savings per company',
  },
  {
    icon: Clock,
    value: '2.3 mo',
    label: 'payback period',
  },
  {
    icon: TrendingDown,
    value: '70%',
    label: 'cost reduction',
  },
  {
    icon: Building2,
    value: '40+',
    label: 'PE-backed companies',
  },
]

export function HeroCFO() {
  const handlePrimaryCTA = () => {
    track('cta_click', { location: 'hero_cfo', cta: 'portfolio_roi' })
  }

  const handleSecondaryCTA = () => {
    track('cta_click', { location: 'hero_cfo', cta: 'see_pricing' })
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
            <span className="pill mb-6">For PE-Backed Companies</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-1 mb-6 text-balance"
          >
            Your Marketing Team's Output Should Scale.
            <br />
            <span className="text-muted">Your Headcount Shouldn't.</span>
          </motion.h1>

          {/* Subheadline - CFO focused */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted max-w-2xl mx-auto mb-4"
          >
            Open Vox automates B2B newsletter production—cutting content costs 70%
            while your team focuses on strategy that moves pipeline.
          </motion.p>

          {/* Key financial proof point */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-lg font-medium text-foreground mb-8"
          >
            Portfolio companies average $127K annual savings. Payback in 2.3 months.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              href="#roi-calculator"
              onClick={handlePrimaryCTA}
              className="btn-primary group"
            >
              Request Portfolio ROI Analysis
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#pricing"
              onClick={handleSecondaryCTA}
              className="btn-secondary"
            >
              See Per-Company Pricing
            </Link>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {trustMetrics.map((metric, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-card border border-border"
              >
                <metric.icon className="w-5 h-5 mx-auto mb-2 text-muted" />
                <div className="text-2xl font-semibold text-foreground">
                  {metric.value}
                </div>
                <div className="text-xs text-muted">{metric.label}</div>
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
          id="grid-cfo"
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
      <rect width="100%" height="100%" fill="url(#grid-cfo)" />
    </svg>
  )
}

export default HeroCFO
