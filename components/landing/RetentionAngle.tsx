'use client'

import { motion } from 'framer-motion'
import { Heart, TrendingUp, Users, RefreshCw } from 'lucide-react'

const useCases = [
  {
    icon: Heart,
    title: 'Onboarding sequences',
    description: 'Guide new users through activation with timely, relevant tips and feature highlights.',
  },
  {
    icon: TrendingUp,
    title: 'Adoption campaigns',
    description: 'Surface underused features to power users and drive deeper product engagement.',
  },
  {
    icon: Users,
    title: 'Customer nurturing',
    description: 'Keep existing customers informed about updates, best practices, and success stories.',
  },
  {
    icon: RefreshCw,
    title: 'Re-engagement',
    description: 'Win back churned or dormant users with targeted content based on their history.',
  },
]

export function RetentionAngle() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="pill mb-4">Retention & nurturing</span>
            <h2 className="heading-2 mb-4">
              Newsletters that drive adoption, not just opens
            </h2>
            <p className="body-large mb-8">
              Open Vox is built for lifecycle marketing teams. Create sequences that
              onboard, educate, and retain—automatically tuned to each user's journey stage.
            </p>

            <div className="space-y-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{useCase.title}</h3>
                    <p className="text-sm text-muted">{useCase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="card p-6">
              {/* Journey visualization */}
              <div className="text-sm font-medium mb-4">User journey stages</div>
              <div className="space-y-4">
                {[
                  { stage: 'Sign up', day: 'Day 0', email: 'Welcome + quick start' },
                  { stage: 'First action', day: 'Day 1', email: 'Feature deep dive' },
                  { stage: 'Engaged', day: 'Day 3', email: 'Power user tips' },
                  { stage: 'Trial end', day: 'Day 7', email: 'Upgrade nudge' },
                  { stage: 'Customer', day: 'Day 14', email: 'Success story' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-20 text-xs text-muted">{item.day}</div>
                    <div className="relative flex-1">
                      <div className="h-8 bg-card-hover border border-border rounded flex items-center px-3">
                        <span className="text-xs text-muted mr-2">{item.stage}</span>
                        <span className="text-xs">→</span>
                        <span className="text-xs ml-2 text-foreground">{item.email}</span>
                      </div>
                      {index < 4 && (
                        <div className="absolute left-4 top-8 w-px h-4 bg-border" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Automated sequences</span>
                  <span className="font-medium">5 emails configured</span>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full border border-border rounded-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default RetentionAngle
