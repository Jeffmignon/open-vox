'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

const problems = [
  'Hours spent curating content each week',
  'Inconsistent cadence that erodes trust',
  'Generic templates that feel impersonal',
  'Scrambling to hit send on time',
]

const solutions = [
  'AI curates relevant content in seconds',
  'Automated scheduling keeps you on track',
  'Personalized copy for each segment',
  'Review and approve, then forget about it',
]

export function ProblemSolution() {
  return (
    <section className="section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">
            Stop wrestling with newsletter production
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Marketing teams waste hours every week on manual content curation and formatting.
            Open Vox handles the tedious work so you can focus on strategy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center">
                <X className="w-4 h-4 text-muted" />
              </div>
              <h3 className="font-semibold text-lg">Before Open Vox</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-border/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-muted" />
                  </div>
                  <span className="text-muted">{problem}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-6 border-foreground/10"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                <Check className="w-4 h-4 text-background" />
              </div>
              <h3 className="font-semibold text-lg">With Open Vox</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-background" />
                  </div>
                  <span className="text-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution
