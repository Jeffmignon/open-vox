'use client'

import { motion } from 'framer-motion'

export function ExampleOutput() {
  return (
    <section id="examples" className="section bg-card/50 border-y border-border">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="pill mb-4">Example output</span>
          <h2 className="heading-2 mb-4">See what Open Vox produces</h2>
          <p className="body-large max-w-2xl mx-auto">
            A sample newsletter structure generated from a simple brief.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="terminal-card">
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-dot bg-muted/40" />
              <div className="terminal-dot bg-muted/40" />
              <div className="terminal-dot bg-muted/40" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">
                newsletter-output.md
              </span>
            </div>

            {/* Terminal Content */}
            <div className="terminal-body text-sm leading-relaxed">
              <div className="text-muted-foreground mb-4">
                <span className="text-accent-foreground/60"># </span>
                <span className="text-accent-foreground">Weekly Product Digest</span>
              </div>

              <div className="mb-4">
                <span className="text-muted-foreground/60">Subject: </span>
                <span className="text-accent-foreground">
                  3 features you missed (and why they matter)
                </span>
              </div>

              <div className="border-t border-muted/20 pt-4 mb-4">
                <p className="text-accent-foreground/90 mb-3">
                  Hey Sarah,
                </p>
                <p className="text-accent-foreground/80 mb-3">
                  Your trial is 7 days in—here's what power users are loving this week.
                </p>
              </div>

              <div className="space-y-3 mb-4">
                <div className="text-muted-foreground/60 text-xs uppercase tracking-wider">
                  Section 1: Feature Spotlight
                </div>
                <div className="pl-4 border-l-2 border-muted/30">
                  <p className="text-accent-foreground/80">
                    <span className="text-accent-foreground font-medium">Bulk actions</span> now support custom filters.
                    Save 2+ hours per week on repetitive tasks.
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="text-muted-foreground/60 text-xs uppercase tracking-wider">
                  Section 2: Quick tip
                </div>
                <div className="pl-4 border-l-2 border-muted/30">
                  <p className="text-accent-foreground/80">
                    Press <code className="px-1 py-0.5 bg-muted/20 rounded text-xs">⌘K</code> anywhere
                    to open command palette.
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="text-muted-foreground/60 text-xs uppercase tracking-wider">
                  Section 3: CTA
                </div>
                <div className="pl-4 border-l-2 border-muted/30">
                  <p className="text-accent-foreground/80">
                    Ready to unlock full access?
                    <span className="ml-2 px-3 py-1 bg-accent-foreground text-accent text-xs rounded font-medium">
                      Upgrade now →
                    </span>
                  </p>
                </div>
              </div>

              <div className="border-t border-muted/20 pt-4 text-muted-foreground/60 text-xs">
                Generated in 12s • 3 sections • 127 words • Reading time: 45s
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExampleOutput
