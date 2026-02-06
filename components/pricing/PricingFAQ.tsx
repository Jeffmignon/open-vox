'use client'

import { motion } from 'framer-motion'
import { Accordion } from '@/components/ui/Accordion'

const pricingFaqItems = [
  {
    id: 'credits-explained',
    question: 'How are credits calculated?',
    answer: 'Each newsletter issue uses credits based on a simple formula: 40 base credits plus 8 credits per content piece. So a newsletter with 10 content pieces uses 120 credits per issue. Your monthly usage is calculated by multiplying credits per issue by how many issues you send per month.',
  },
  {
    id: 'what-is-content-piece',
    question: 'What counts as a content piece?',
    answer: 'A content piece is any distinct section in your newsletter: a feature spotlight, article summary, tip, testimonial, product update, or CTA block. Most newsletters have 5–15 content pieces. Our agent intelligently structures your content into these sections.',
  },
  {
    id: 'multiple-newsletters',
    question: 'How does pricing work for multiple newsletters?',
    answer: 'Each newsletter consumes credits independently. Your total monthly credit usage is the sum across all your newsletters. For example, if you have two newsletters—one using 500 credits/month and another using 800—your total is 1,300 credits/month.',
  },
  {
    id: 'change-frequency',
    question: 'Can I change my newsletter frequency?',
    answer: 'Yes, you can adjust frequency at any time. Changing from weekly to daily will increase your credit usage (more issues per month), while switching to biweekly will reduce it. Your billing adjusts automatically.',
  },
  {
    id: 'overage-handling',
    question: 'What happens if I exceed my credit limit?',
    answer: "On Growth plans, you can purchase additional credits at the same rate ($0.02/credit). On Starter, you'll be prompted to upgrade. We send alerts at 75% and 90% usage so you're never surprised.",
  },
  {
    id: 'unused-credits',
    question: 'Do unused credits roll over?',
    answer: "Credits are refreshed monthly and don't roll over. This keeps pricing simple and predictable. If you consistently use fewer credits than your plan includes, consider adjusting your plan to save costs.",
  },
  {
    id: 'upgrade-downgrade',
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes. Upgrades take effect immediately with prorated billing. Downgrades take effect at the start of your next billing cycle. You can also adjust your Growth plan credits at any time.',
  },
  {
    id: 'enterprise-pricing',
    question: 'How does Enterprise pricing work?',
    answer: 'Enterprise plans are custom-quoted based on your volume, security requirements, and support needs. Contact our sales team for a tailored proposal. Volume discounts are available for high-usage teams.',
  },
]

export function PricingFAQ() {
  return (
    <section className="section bg-card/50 border-y border-border">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="pill mb-4">Pricing FAQ</span>
          <h2 className="heading-2 mb-4">Common pricing questions</h2>
          <p className="body-large">
            Clear answers to help you choose the right plan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion items={pricingFaqItems} />
        </motion.div>
      </div>
    </section>
  )
}

export default PricingFAQ
