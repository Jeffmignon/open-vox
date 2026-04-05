'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Clock, FileText } from 'lucide-react'
import Link from 'next/link'
import { track } from '@/lib/analytics'

const trustItems = [
  { icon: Clock, text: '14-day time to value' },
  { icon: Shield, text: '90-day performance guarantee' },
  { icon: FileText, text: 'Board-ready ROI documentation' },
]

export function CTACFO() {
  const handlePrimaryCTA = () => {
    track('cta_click', { location: 'cta_section_cfo', cta: 'portfolio_analysis' })
  }

  const handleSecondaryCTA = () => {
    track('cta_click', { location: 'cta_section_cfo', cta: 'talk_to_sales' })
  }

  return (
    <section className="section bg-foreground text-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Ready to improve portfolio EBITDA?
          </h2>
          <p className="text-lg text-background/70 mb-8 max-w-xl mx-auto">
            Get a custom ROI analysis for your portfolio. See the math before you commit.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="#roi-calculator"
              onClick={handlePrimaryCTA}
              className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground font-medium rounded-lg hover:bg-card-hover transition-colors group"
            >
              Request Portfolio ROI Analysis
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="mailto:pe@openvox.io"
              onClick={handleSecondaryCTA}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-background/30 text-background font-medium rounded-lg hover:bg-background/10 transition-colors"
            >
              Talk to PE Sales Team
            </a>
          </div>

          {/* Trust items */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-background/70"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTACFO
