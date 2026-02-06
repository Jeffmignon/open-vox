'use client'

import { motion } from 'framer-motion'
import {
  Search,
  UserCircle,
  Calendar,
  RefreshCw,
  Users,
  Shield,
  Palette,
  BarChart3,
  Layers,
} from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Content curation',
    description: 'Automatically sources relevant articles, updates, and insights based on your audience and goals.',
  },
  {
    icon: UserCircle,
    title: 'Personalization',
    description: 'Tailor messaging for different segments—trial users, power users, at-risk accounts, and more.',
  },
  {
    icon: Calendar,
    title: 'Cadence automation',
    description: 'Set your schedule once. The agent prepares issues on time, every time, without manual triggers.',
  },
  {
    icon: RefreshCw,
    title: 'Content repurposing',
    description: 'Turn blog posts, docs, and product updates into newsletter-ready formats automatically.',
  },
  {
    icon: Users,
    title: 'Segmentation-ready copy',
    description: 'Generate variant copy for different audience segments from a single brief.',
  },
  {
    icon: Shield,
    title: 'Compliance checks',
    description: 'Built-in scans for brand guidelines, legal disclaimers, and accessibility standards.',
  },
  {
    icon: Palette,
    title: 'Brand voice control',
    description: 'Train the agent on your tone, style, and terminology for consistent, on-brand output.',
  },
  {
    icon: BarChart3,
    title: 'Analytics-ready outputs',
    description: 'Structured content with tracking parameters and engagement hooks baked in.',
  },
  {
    icon: Layers,
    title: 'Multi-newsletter support',
    description: 'Run multiple newsletters for different products, regions, or use cases from one workspace.',
  },
]

export function FeatureGrid() {
  return (
    <section id="features" className="section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="pill mb-4">Features</span>
          <h2 className="heading-2 mb-4">Everything you need to ship great newsletters</h2>
          <p className="body-large max-w-2xl mx-auto">
            Open Vox handles content, copy, compliance, and cadence—so your team can focus on strategy.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card card-hover p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-card-hover border border-border flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
