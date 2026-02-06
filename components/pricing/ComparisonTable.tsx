'use client'

import { motion } from 'framer-motion'
import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

type FeatureValue = boolean | string

interface Feature {
  name: string
  starter: FeatureValue
  growth: FeatureValue
  enterprise: FeatureValue
}

const features: Feature[] = [
  {
    name: 'Monthly credits',
    starter: '2,000',
    growth: '3K–50K (adjustable)',
    enterprise: 'Custom',
  },
  {
    name: 'Newsletters',
    starter: '1',
    growth: 'Unlimited',
    enterprise: 'Unlimited',
  },
  {
    name: 'Content curation',
    starter: true,
    growth: true,
    enterprise: true,
  },
  {
    name: 'Basic templates',
    starter: true,
    growth: true,
    enterprise: true,
  },
  {
    name: 'Custom templates',
    starter: false,
    growth: true,
    enterprise: true,
  },
  {
    name: 'Brand voice training',
    starter: false,
    growth: true,
    enterprise: true,
  },
  {
    name: 'Personalization',
    starter: 'Basic',
    growth: 'Advanced',
    enterprise: 'Advanced + Custom',
  },
  {
    name: 'Automation workflows',
    starter: false,
    growth: true,
    enterprise: true,
  },
  {
    name: 'Integrations (CRM, ESP)',
    starter: false,
    growth: true,
    enterprise: true,
  },
  {
    name: 'Custom integrations',
    starter: false,
    growth: false,
    enterprise: true,
  },
  {
    name: 'API access',
    starter: false,
    growth: true,
    enterprise: true,
  },
  {
    name: 'SSO / SAML',
    starter: false,
    growth: false,
    enterprise: true,
  },
  {
    name: 'Audit logs',
    starter: false,
    growth: false,
    enterprise: true,
  },
  {
    name: 'SLA guarantee',
    starter: false,
    growth: false,
    enterprise: true,
  },
  {
    name: 'Support',
    starter: 'Email',
    growth: 'Priority email',
    enterprise: 'Dedicated CSM',
  },
]

function FeatureCell({ value }: { value: FeatureValue }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="w-5 h-5 text-foreground mx-auto" />
    ) : (
      <Minus className="w-5 h-5 text-muted-foreground mx-auto" />
    )
  }
  return <span className="text-sm">{value}</span>
}

export function ComparisonTable() {
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
          <span className="pill mb-4">Compare plans</span>
          <h2 className="heading-2 mb-4">Feature comparison</h2>
          <p className="body-large">
            See exactly what's included in each tier.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 pr-4 font-medium text-sm w-1/4">
                  Feature
                </th>
                <th className="text-center py-4 px-4 font-medium text-sm w-1/4">
                  Starter
                </th>
                <th className="text-center py-4 px-4 font-medium text-sm w-1/4 bg-card-hover">
                  Growth
                </th>
                <th className="text-center py-4 pl-4 font-medium text-sm w-1/4">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={feature.name}
                  className={cn(
                    'border-b border-border',
                    index % 2 === 0 && 'bg-card/50'
                  )}
                >
                  <td className="py-4 pr-4 text-sm">{feature.name}</td>
                  <td className="py-4 px-4 text-center">
                    <FeatureCell value={feature.starter} />
                  </td>
                  <td className="py-4 px-4 text-center bg-card-hover/50">
                    <FeatureCell value={feature.growth} />
                  </td>
                  <td className="py-4 pl-4 text-center">
                    <FeatureCell value={feature.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}

export default ComparisonTable
