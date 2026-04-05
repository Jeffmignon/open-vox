'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export function CFOTestimonial() {
  return (
    <section className="section">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card p-8 md:p-12 relative"
        >
          <Quote className="absolute top-6 left-6 w-8 h-8 text-border" />

          <blockquote className="relative z-10">
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
              "I approved Open Vox in one meeting because the math was obvious: we were spending $14K/month on content production with inconsistent output. Now we spend $3,500 with 3x the volume. That's $126K back to EBITDA annually. My board didn't ask questions—they asked why we didn't do it sooner."
            </p>

            <footer className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-card-hover flex items-center justify-center">
                <span className="text-lg font-semibold text-muted">SC</span>
              </div>
              <div>
                <cite className="not-italic font-semibold text-foreground">
                  Sarah Chen
                </cite>
                <p className="text-sm text-muted">
                  CFO, TechScale (Vista Equity portfolio company)
                </p>
              </div>
            </footer>
          </blockquote>
        </motion.div>

        {/* Additional proof points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mt-8"
        >
          <div className="text-center p-4">
            <div className="text-3xl font-semibold text-foreground mb-1">12</div>
            <div className="text-sm text-muted">Portfolio companies deployed</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-semibold text-foreground mb-1">$1.4M</div>
            <div className="text-sm text-muted">Combined annual savings</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-semibold text-foreground mb-1">67 days</div>
            <div className="text-sm text-muted">Average time to positive ROI</div>
          </div>
        </motion.div>

        {/* Operating partner quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-6 bg-card-hover rounded-lg border border-border"
        >
          <p className="text-muted italic mb-3">
            "We mandate Open Vox in our first 90 days post-close. It's now a standard item in our marketing efficiency playbook."
          </p>
          <p className="text-sm font-medium">
            — Operating Partner, Growth Equity Fund
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CFOTestimonial
