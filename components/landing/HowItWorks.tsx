'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Sparkles, Send } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell us audience + goal',
    description: "Define who you're reaching and what action you want them to take.",
    mockContent: (
      <div className="space-y-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">Audience:</span>
          <span className="pill text-xs py-0.5">Trial users</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">Goal:</span>
          <span className="pill text-xs py-0.5">Activation</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">Cadence:</span>
          <span className="pill text-xs py-0.5">Weekly</span>
        </div>
      </div>
    ),
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Open Vox drafts, curates, formats',
    description: 'The agent pulls relevant content, writes copy, and assembles your newsletter.',
    mockContent: (
      <div className="space-y-2 text-xs font-mono">
        <div className="text-muted-foreground">Generating...</div>
        <div className="h-2 bg-border rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-foreground rounded-full" />
        </div>
        <div className="space-y-1 text-muted">
          <div className="flex items-center gap-2">
            <span className="text-green-600">✓</span> Content curated
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">✓</span> Copy drafted
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">○</span> Formatting...
          </div>
        </div>
      </div>
    ),
  },
  {
    number: '03',
    icon: Send,
    title: 'Approve & schedule',
    description: 'Review the draft, make any tweaks, and schedule it to send.',
    mockContent: (
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Status</span>
          <span className="pill text-xs py-0.5 bg-foreground text-background">Ready</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Scheduled</span>
          <span className="text-foreground">Tue 9:00 AM</span>
        </div>
        <div className="pt-2 border-t border-border">
          <button className="w-full py-1.5 bg-foreground text-background text-xs rounded font-medium">
            Approve & Send
          </button>
        </div>
      </div>
    ),
  },
]

export function HowItWorks() {
  return (
    <section className="section bg-card/50 border-y border-border">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="pill mb-4">How it works</span>
          <h2 className="heading-2 mb-4">Three steps to send-ready</h2>
          <p className="body-large max-w-2xl mx-auto">
            Define your goals, let the agent work, then review and ship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-border" />
              )}

              <div className="card card-hover p-6 relative bg-card">
                {/* Step number */}
                <div className="text-xs font-mono text-muted mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-background" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted mb-6">{step.description}</p>

                {/* Mock UI */}
                <div className="p-4 bg-background rounded-lg border border-border">
                  {step.mockContent}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
