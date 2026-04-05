'use client'

import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'

const boardQA = [
  {
    question: "What's the payback period?",
    answer: "Average: 2.3 months. Most portfolio companies see positive ROI within 70 days.",
  },
  {
    question: "How does this affect EBITDA?",
    answer: "Typical impact: $80K-$150K annual savings, straight to the bottom line. That's 15-20 basis points of margin improvement.",
  },
  {
    question: "What if it doesn't work?",
    answer: "90-day performance guarantee. Full refund if targets aren't met. We're aligned with your board timeline.",
  },
  {
    question: "Can we exit if we need to?",
    answer: "Month-to-month available. No annual lock-in required. Cancel with 30 days notice.",
  },
  {
    question: "What's the implementation risk?",
    answer: "14-day time to value. Standard integration scope: 40 hours professional services included.",
  },
  {
    question: "How does this fit our value creation plan?",
    answer: "Designed for 100-day plan integration. Standard playbook item for marketing efficiency across portfolio.",
  },
]

export function BoardQuestions() {
  return (
    <section className="section">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="pill mb-4">Board Ready</span>
          <h2 className="heading-2 mb-4">
            What Your PE Sponsor Will Ask.
            <br />
            And the Answers.
          </h2>
        </motion.div>

        <div className="grid gap-4">
          {boardQA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card p-5"
            >
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-card-hover flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-muted" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">
                    "{item.question}"
                  </p>
                  <p className="text-sm text-muted">
                    {item.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BoardQuestions
