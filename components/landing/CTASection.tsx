'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Clock, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { track } from '@/lib/analytics'

const trustItems = [
  { icon: Clock, text: 'Results in 60 seconds' },
  { icon: Shield, text: 'No credit card required' },
  { icon: Sparkles, text: 'See real AI-generated output' },
]

export function CTASection() {
  const handleCTAClick = () => {
    track('cta_click', { location: 'cta_section', cta: 'get_sample' })
  }

  return (
    <section id="sample" className="section bg-foreground text-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Get a sample issue in 60 seconds
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            See exactly what Open Vox produces for your audience. No commitment, no credit card.
          </p>

          {/* CTA Button */}
          <Link
            href="/pricing#sample-generator"
            onClick={handleCTAClick}
            className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground font-medium rounded-lg hover:bg-card-hover transition-colors group mb-8"
          >
            Generate my sample issue
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Trust items */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-muted-foreground"
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

export default CTASection
