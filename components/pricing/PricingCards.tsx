'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Slider } from '@/components/ui/Slider'
import {
  STARTER_TIER,
  GROWTH_TIER,
  ENTERPRISE_TIER,
  calculateGrowthPrice,
  formatPrice,
  formatCredits,
} from '@/lib/pricing'
import { track } from '@/lib/analytics'

const starterFeatures = [
  '2,000 credits/month',
  '1 newsletter',
  'Core content curation',
  'Basic templates',
  'Email support',
]

const growthFeatures = [
  'Adjustable credits (3K–50K)',
  'Unlimited newsletters',
  'Advanced personalization',
  'Custom brand voice',
  'Automation workflows',
  'Priority support',
  'Integrations (CRM, ESP)',
]

const enterpriseFeatures = [
  'Everything in Growth',
  'Custom credit volume',
  'SSO & SAML',
  'SLA guarantees',
  'Dedicated success manager',
  'Custom integrations',
  'Security & compliance review',
  'Audit logs',
]

export function PricingCards() {
  const [growthCredits, setGrowthCredits] = useState([GROWTH_TIER.defaultCredits])
  const growthPrice = calculateGrowthPrice(growthCredits[0])

  const handleSliderChange = (value: number[]) => {
    setGrowthCredits(value)
    track('pricing_slider_change', { credits: value[0] })
  }

  const handleTierSelect = (tier: string) => {
    track('tier_selected', { tier })
  }

  return (
    <section className="section-tight">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Starter Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card p-6 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-1">{STARTER_TIER.name}</h3>
              <p className="text-sm text-muted">{STARTER_TIER.description}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-semibold">
                  {formatPrice(STARTER_TIER.price)}
                </span>
                <span className="text-muted">/month</span>
              </div>
              <p className="text-sm text-muted mt-1">
                {formatCredits(STARTER_TIER.creditsIncluded)} credits included
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {starterFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#sample-generator"
              onClick={() => handleTierSelect('starter')}
              className="btn-secondary w-full text-center"
            >
              Start free trial
            </Link>
          </motion.div>

          {/* Growth Tier (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-6 flex flex-col border-foreground relative"
          >
            {/* Popular badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="px-3 py-1 bg-foreground text-background text-xs font-medium rounded-full">
                Most popular
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-1">{GROWTH_TIER.name}</h3>
              <p className="text-sm text-muted">{GROWTH_TIER.description}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-semibold">
                  {formatPrice(growthPrice)}
                </span>
                <span className="text-muted">/month</span>
              </div>
              <p className="text-sm text-muted mt-1">
                {formatCredits(growthCredits[0])} credits
              </p>
            </div>

            {/* Credits Slider */}
            <div className="mb-6 p-4 bg-card-hover rounded-lg">
              <label className="text-sm font-medium mb-3 block">
                Adjust credits
              </label>
              <Slider
                min={GROWTH_TIER.minCredits}
                max={GROWTH_TIER.maxCredits}
                step={1000}
                value={growthCredits}
                onValueChange={handleSliderChange}
                showValue
                formatValue={(v) => formatCredits(v)}
              />
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {growthFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#estimator"
              onClick={() => handleTierSelect('growth')}
              className="btn-primary w-full text-center group"
            >
              Estimate my exact price
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Enterprise Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-6 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-1">{ENTERPRISE_TIER.name}</h3>
              <p className="text-sm text-muted">{ENTERPRISE_TIER.description}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-semibold">Custom</span>
              </div>
              <p className="text-sm text-muted mt-1">
                Volume pricing available
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {enterpriseFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:sales@openvox.io"
              onClick={() => handleTierSelect('enterprise')}
              className="btn-secondary w-full text-center"
            >
              Contact sales
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PricingCards
