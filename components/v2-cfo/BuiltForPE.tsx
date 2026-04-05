'use client'

import { motion } from 'framer-motion'
import { Building2, BarChart3, Users, Shield } from 'lucide-react'

const operatingPartnerFeatures = [
  'Deploy across entire portfolio with standardized playbook',
  'Portfolio-level analytics and compliance controls',
  'Consolidated billing and MSA structures',
]

const cfoPFeatures = [
  '$127K average annual savings per company',
  '2.3-month payback period',
  'Direct EBITDA impact through headcount efficiency',
]

const cmoFeatures = [
  '14-day time to value',
  'Integration with existing martech stack',
  'Maintain brand control with AI automation',
]

export function BuiltForPE() {
  return (
    <section className="section bg-foreground text-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background/10 text-background/80 mb-4">
            Built for Private Equity
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Designed for Portfolio-Wide Deployment
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto">
            Open Vox is not just another marketing tool. It's operational infrastructure
            for PE-backed companies that need to scale marketing output without scaling
            marketing headcount.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* For Operating Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-xl bg-background/5 border border-background/10"
          >
            <div className="w-12 h-12 rounded-lg bg-background/10 flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-background" />
            </div>
            <h3 className="text-lg font-semibold mb-4">For Operating Partners</h3>
            <ul className="space-y-3">
              {operatingPartnerFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-background/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-background/50 mt-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* For Portfolio Company CFOs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-xl bg-background/5 border border-background/10"
          >
            <div className="w-12 h-12 rounded-lg bg-background/10 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-background" />
            </div>
            <h3 className="text-lg font-semibold mb-4">For Portfolio Company CFOs</h3>
            <ul className="space-y-3">
              {cfoPFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-background/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-background/50 mt-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* For Portfolio Company CMOs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-xl bg-background/5 border border-background/10"
          >
            <div className="w-12 h-12 rounded-lg bg-background/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-background" />
            </div>
            <h3 className="text-lg font-semibold mb-4">For Portfolio Company CMOs</h3>
            <ul className="space-y-3">
              {cmoFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-background/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-background/50 mt-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Portfolio ROI Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold text-center mb-6">
            Portfolio-Wide Impact
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full max-w-2xl mx-auto">
              <thead>
                <tr className="border-b border-background/20">
                  <th className="text-left py-3 px-4 text-sm font-medium text-background/70">
                    Portfolio Companies
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-background/70">
                    Monthly Savings
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-background/70">
                    Annual Savings
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-background/70">
                    Payback
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-background/10">
                  <td className="py-3 px-4 text-sm">5 companies</td>
                  <td className="py-3 px-4 text-sm text-right font-mono">$52.9K</td>
                  <td className="py-3 px-4 text-sm text-right font-mono">$635K</td>
                  <td className="py-3 px-4 text-sm text-right">2.3 months</td>
                </tr>
                <tr className="border-b border-background/10">
                  <td className="py-3 px-4 text-sm">10 companies</td>
                  <td className="py-3 px-4 text-sm text-right font-mono">$105.8K</td>
                  <td className="py-3 px-4 text-sm text-right font-mono">$1.27M</td>
                  <td className="py-3 px-4 text-sm text-right">2.3 months</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium">15 companies</td>
                  <td className="py-3 px-4 text-sm text-right font-mono font-medium">$158.8K</td>
                  <td className="py-3 px-4 text-sm text-right font-mono font-medium">$1.9M</td>
                  <td className="py-3 px-4 text-sm text-right font-medium">2.3 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BuiltForPE
