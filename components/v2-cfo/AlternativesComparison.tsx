'use client'

import { motion } from 'framer-motion'
import { Check, X, AlertCircle } from 'lucide-react'

const alternatives = [
  {
    option: 'Content hire',
    annualCost: '$95K+',
    costDetail: 'salary, benefits, management overhead',
    output: '4-8 newsletters/month',
    risk: '90-day ramp, turnover risk',
    riskLevel: 'high',
  },
  {
    option: 'Agency retainer',
    annualCost: '$96K-$180K',
    costDetail: 'variable quality, revision cycles',
    output: 'Variable',
    risk: 'Contract lock-in, quality variance',
    riskLevel: 'medium',
  },
  {
    option: 'Open Vox',
    annualCost: '$30K-$48K',
    costDetail: 'predictable, all-inclusive',
    output: '12+ newsletters/month',
    risk: '90-day guarantee',
    riskLevel: 'low',
    highlighted: true,
  },
]

export function AlternativesComparison() {
  return (
    <section className="section bg-card/50 border-y border-border">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="pill mb-4">The Math Your Board Will Ask About</span>
          <h2 className="heading-2 mb-4">
            Compare Your Options
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            What does newsletter production actually cost? Here's the math.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-medium text-sm">
                  Alternative
                </th>
                <th className="text-left py-4 px-4 font-medium text-sm">
                  Annual Cost
                </th>
                <th className="text-left py-4 px-4 font-medium text-sm">
                  Output
                </th>
                <th className="text-left py-4 px-4 font-medium text-sm">
                  Risk
                </th>
              </tr>
            </thead>
            <tbody>
              {alternatives.map((alt, index) => (
                <tr
                  key={index}
                  className={`border-b border-border ${
                    alt.highlighted ? 'bg-foreground text-background' : ''
                  }`}
                >
                  <td className="py-4 px-4">
                    <div className="font-medium">{alt.option}</div>
                    {alt.highlighted && (
                      <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded bg-background text-foreground">
                        Recommended
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-mono font-medium">{alt.annualCost}</div>
                    <div className={`text-xs ${alt.highlighted ? 'opacity-70' : 'text-muted'}`}>
                      {alt.costDetail}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-medium">{alt.output}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      {alt.riskLevel === 'low' ? (
                        <Check className={`w-4 h-4 ${alt.highlighted ? 'text-background' : 'text-foreground'}`} />
                      ) : alt.riskLevel === 'medium' ? (
                        <AlertCircle className="w-4 h-4 text-muted" />
                      ) : (
                        <X className="w-4 h-4 text-muted" />
                      )}
                      <span className={`text-sm ${alt.highlighted ? '' : 'text-muted'}`}>
                        {alt.risk}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 max-w-2xl mx-auto text-center"
        >
          <p className="text-muted">
            <span className="font-medium text-foreground">The bottom line:</span>{' '}
            For every $1 spent on Open Vox, portfolio companies save $4.20 in content production costs within 90 days.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AlternativesComparison
