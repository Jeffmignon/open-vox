'use client'

import { motion } from 'framer-motion'
import { Accordion } from '@/components/ui/Accordion'

const faqItems = [
  {
    id: 'what-is-openvox',
    question: 'What is Open Vox?',
    answer: 'Open Vox is an agentic platform that automates newsletter production for marketing teams. You define your audience and goals, and our AI agent curates content, writes copy, and formats your newsletter—ready for your approval and send.',
  },
  {
    id: 'how-credits-work',
    question: 'How do credits work?',
    answer: 'Credits are the currency for newsletter production. Each newsletter issue consumes credits based on its complexity: a base amount (40 credits) plus additional credits per content piece (8 credits each). For example, a newsletter with 10 content pieces uses 120 credits per issue.',
  },
  {
    id: 'what-counts-as-content',
    question: 'What counts as a content piece?',
    answer: 'A content piece is any distinct section in your newsletter: a feature highlight, article summary, product update, tip, testimonial, or CTA block. Our agent structures your newsletter into logical pieces based on your brief.',
  },
  {
    id: 'multiple-newsletters',
    question: 'Can I run multiple newsletters?',
    answer: 'Yes. You can create as many newsletters as you need—for different products, audiences, or regions. Each newsletter consumes credits independently, and your total monthly usage is the sum across all newsletters.',
  },
  {
    id: 'change-cadence',
    question: 'Can I change my newsletter cadence?',
    answer: 'Absolutely. You can adjust frequency (daily, weekly, etc.) at any time. Your credit consumption will adjust automatically based on how many issues you produce per month.',
  },
  {
    id: 'overage-credits',
    question: 'What happens if I run out of credits?',
    answer: "On Growth plans, you can purchase additional credits at the same per-credit rate. On Starter plans, you'll be prompted to upgrade. We'll notify you before you hit your limit so there are no surprises.",
  },
  {
    id: 'integrations',
    question: 'What integrations do you support?',
    answer: 'Open Vox integrates with major email service providers (Mailchimp, Sendgrid, Customer.io, etc.), CRMs (Salesforce, HubSpot), and content sources (RSS, Notion, your blog). Enterprise plans include custom integration support.',
  },
  {
    id: 'brand-voice',
    question: 'How do you maintain my brand voice?',
    answer: 'You can provide brand guidelines, tone examples, and terminology preferences. The agent learns your style and applies it consistently across all generated content. You can also fine-tune output before sending.',
  },
  {
    id: 'approval-workflow',
    question: 'Do I need to approve every newsletter?',
    answer: 'Yes—you always have final say before anything sends. Our agent prepares drafts on your schedule, and you review, edit if needed, and approve. Nothing goes out without your explicit confirmation.',
  },
  {
    id: 'data-security',
    question: 'How do you handle data security?',
    answer: 'We follow SOC2-ready security practices including encryption at rest and in transit, role-based access controls, and regular security audits. Enterprise plans include additional compliance features like SSO and audit logs.',
  },
  {
    id: 'free-trial',
    question: 'Is there a free trial?',
    answer: 'We offer a free sample generation so you can see exactly what Open Vox produces for your use case. For ongoing use, all plans start with a predictable monthly price—no hidden fees.',
  },
  {
    id: 'cancel-anytime',
    question: 'Can I cancel anytime?',
    answer: 'Yes. All plans are month-to-month with no long-term commitment. You can cancel or change your plan at any time, effective at the end of your billing period.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="pill mb-4">FAQ</span>
          <h2 className="heading-2 mb-4">Frequently asked questions</h2>
          <p className="body-large">
            Everything you need to know about Open Vox.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
