'use client'

import { motion } from 'framer-motion'

const peFirms = [
  { name: 'Vista Equity', type: 'PE Firm' },
  { name: 'Thoma Bravo', type: 'PE Firm' },
  { name: 'Summit Partners', type: 'Growth Equity' },
  { name: 'Insight Partners', type: 'Growth Equity' },
  { name: 'Francisco Partners', type: 'PE Firm' },
]

export function PEProofBar() {
  return (
    <section className="py-10 border-y border-border bg-card/50">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted mb-6">
            Trusted by portfolio companies of leading PE and growth equity firms
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {peFirms.map((firm, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <PELogoPlaceholder name={firm.name} />
                <span className="text-xs text-muted-foreground mt-1">{firm.type}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PELogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="h-8 px-4 flex items-center justify-center text-muted-foreground">
      <svg
        viewBox="0 0 120 32"
        fill="currentColor"
        className="h-6"
      >
        <rect
          x="0"
          y="8"
          width="120"
          height="16"
          rx="4"
          opacity="0.1"
        />
        <text
          x="60"
          y="20"
          textAnchor="middle"
          fontSize="10"
          fontWeight="500"
          opacity="0.6"
        >
          {name}
        </text>
      </svg>
    </div>
  )
}

export default PEProofBar
