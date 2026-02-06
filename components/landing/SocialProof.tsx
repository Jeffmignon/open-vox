'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'Company A', width: 100 },
  { name: 'Company B', width: 90 },
  { name: 'Company C', width: 110 },
  { name: 'Company D', width: 95 },
  { name: 'Company E', width: 105 },
]

const metrics = [
  { value: '10M+', label: 'Emails sent' },
  { value: '2.5x', label: 'Avg engagement lift' },
  { value: '85%', label: 'Time saved' },
]

export function SocialProof() {
  return (
    <section className="py-12 border-y border-border bg-card/50">
      <div className="container-wide">
        {/* Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-10"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-8 flex items-center text-muted-foreground"
              style={{ width: logo.width }}
            >
              <LogoPlaceholder name={logo.name} />
            </div>
          ))}
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-foreground">
                {metric.value}
              </div>
              <div className="text-sm text-muted">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 100 32"
      fill="currentColor"
      className="w-full h-full"
    >
      <rect
        x="0"
        y="8"
        width="100"
        height="16"
        rx="4"
        opacity="0.15"
      />
      <text
        x="50"
        y="20"
        textAnchor="middle"
        fontSize="10"
        opacity="0.5"
      >
        {name}
      </text>
    </svg>
  )
}

export default SocialProof
