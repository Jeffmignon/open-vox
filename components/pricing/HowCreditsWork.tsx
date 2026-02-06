'use client'

import { motion } from 'framer-motion'
import {
  CREDITS_BASE_PER_ISSUE,
  CREDITS_PER_CONTENT_PIECE,
  FREQUENCY_LABELS,
  FREQUENCY_TO_ISSUES,
  calculateCreditsPerIssue,
  calculateMonthlyCredits,
  formatCredits,
} from '@/lib/pricing'

export function HowCreditsWork() {
  // Example calculation: Weekly newsletter with 10 content pieces
  const exampleFrequency = 'weekly'
  const examplePieces = 10
  const exampleCreditsPerIssue = calculateCreditsPerIssue(examplePieces)
  const exampleMonthlyCredits = calculateMonthlyCredits(exampleFrequency, examplePieces)
  const exampleIssuesPerMonth = FREQUENCY_TO_ISSUES[exampleFrequency]

  return (
    <section className="section bg-card/50 border-y border-border">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="pill mb-4">Pricing model</span>
          <h2 className="heading-2 mb-4">How credits work</h2>
          <p className="body-large">
            Credits scale with your usage. More newsletters and more content pieces mean more credits.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Formula */}
          <div className="card p-6">
            <h3 className="font-semibold mb-4">The formula</h3>

            <div className="space-y-4">
              <div className="p-4 bg-card-hover rounded-lg font-mono text-sm">
                <div className="text-muted mb-2">Credits per issue:</div>
                <div className="text-foreground">
                  {CREDITS_BASE_PER_ISSUE} + ({CREDITS_PER_CONTENT_PIECE} × content pieces)
                </div>
              </div>

              <div className="p-4 bg-card-hover rounded-lg font-mono text-sm">
                <div className="text-muted mb-2">Monthly credits:</div>
                <div className="text-foreground">
                  issues/month × credits per issue
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2 text-sm text-muted">
              <div className="flex justify-between">
                <span>Base credits per issue</span>
                <span className="font-mono">{CREDITS_BASE_PER_ISSUE}</span>
              </div>
              <div className="flex justify-between">
                <span>Per content piece</span>
                <span className="font-mono">+{CREDITS_PER_CONTENT_PIECE}</span>
              </div>
            </div>
          </div>

          {/* Example */}
          <div className="card p-6">
            <h3 className="font-semibold mb-4">Example calculation</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Frequency</span>
                <span className="pill">{FREQUENCY_LABELS[exampleFrequency]}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Content pieces</span>
                <span className="pill">{examplePieces} pieces</span>
              </div>

              <div className="border-t border-border pt-4">
                <div className="p-4 bg-foreground text-background rounded-lg font-mono text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="opacity-70">Credits/issue:</span>
                    <span>{CREDITS_BASE_PER_ISSUE} + ({CREDITS_PER_CONTENT_PIECE} × {examplePieces}) = {exampleCreditsPerIssue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-70">Issues/month:</span>
                    <span>{exampleIssuesPerMonth}</span>
                  </div>
                  <div className="flex justify-between border-t border-muted/30 pt-2 mt-2">
                    <span className="font-semibold">Monthly credits:</span>
                    <span className="font-semibold">{formatCredits(exampleMonthlyCredits)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Frequency reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-semibold mb-4 text-center">Issues per month by frequency</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(FREQUENCY_LABELS).map(([key, label]) => (
              <div
                key={key}
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm"
              >
                <span className="text-muted">{label}</span>
                <span className="font-mono font-medium">{FREQUENCY_TO_ISSUES[key]}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowCreditsWork
