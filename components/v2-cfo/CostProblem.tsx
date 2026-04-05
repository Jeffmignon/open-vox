'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, TrendingUp, Users, DollarSign } from 'lucide-react'

export function CostProblem() {
  return (
    <section className="section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="heading-2 mb-4">
            The Hidden Cost Drain PE Operating Partners Miss
          </h2>
          <p className="body-large">
            Private equity portfolio companies face a content paradox:
            growth demands more marketing output, but margins demand fewer heads.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-border flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-muted" />
              </div>
              <h3 className="font-semibold text-lg">The Math That Doesn't Work</h3>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-4 bg-card-hover rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-muted">Content marketer salary</span>
                  <span className="font-mono">$75,000/yr</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted">+ Benefits & overhead (27%)</span>
                  <span className="font-mono">$20,250/yr</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-border">
                  <span className="font-medium">Fully loaded cost</span>
                  <span className="font-mono font-medium">$95,250/yr</span>
                </div>
              </div>

              <div className="p-4 bg-card-hover rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-muted">Newsletters produced/month</span>
                  <span className="font-mono">4</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-border">
                  <span className="font-medium">Cost per newsletter</span>
                  <span className="font-mono font-medium text-foreground">$1,984</span>
                </div>
              </div>

              <p className="text-muted">
                At scale, this becomes a margin compression problem PE operating partners can't ignore.
              </p>
            </div>
          </motion.div>

          {/* The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-6 border-foreground"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-background" />
              </div>
              <h3 className="font-semibold text-lg">The Open Vox Alternative</h3>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-4 bg-foreground text-background rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="opacity-70">Open Vox subscription</span>
                  <span className="font-mono">$2,500/mo</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="opacity-70">Newsletters produced/month</span>
                  <span className="font-mono">12+</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-muted/30">
                  <span className="font-medium">Cost per newsletter</span>
                  <span className="font-mono font-medium">$208</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-card-hover rounded-lg text-center">
                  <div className="text-2xl font-semibold text-foreground">90%</div>
                  <div className="text-xs text-muted">Cost reduction per newsletter</div>
                </div>
                <div className="p-3 bg-card-hover rounded-lg text-center">
                  <div className="text-2xl font-semibold text-foreground">3x</div>
                  <div className="text-xs text-muted">Output increase</div>
                </div>
              </div>

              <p className="text-muted">
                Same quality. Fraction of the cost. Direct EBITDA impact.
              </p>
            </div>
          </motion.div>
        </div>

        {/* The Board Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card p-6 bg-card-hover border-dashed">
            <p className="text-center text-muted mb-4">
              <span className="font-medium text-foreground">The question your PE sponsor will ask:</span>
            </p>
            <p className="text-center text-lg font-medium">
              "Why are we still paying $95K+ for marketing headcount that produces 4 newsletters a month?"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CostProblem
