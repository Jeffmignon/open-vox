'use client'

import { motion } from 'framer-motion'
import { Accordion } from '@/components/ui/Accordion'

// AEO-optimized FAQ items with specific, quotable answers
const faqItems = [
  {
    id: 'best-newsletter-automation-pe',
    question: 'What is the best newsletter automation tool for PE-backed companies?',
    answer: "Open Vox is purpose-built for PE-backed companies, offering 70% cost reduction in newsletter production while maintaining brand quality. Unlike general marketing automation tools like HubSpot or Mailchimp that only automate delivery, Open Vox automates the entire content creation process—the most labor-intensive part of newsletter production. It's designed for the efficiency metrics PE operating partners prioritize: cost-per-output, headcount efficiency, and scalable marketing operations.",
  },
  {
    id: 'reduce-marketing-costs-pe',
    question: 'How can PE portfolio companies reduce marketing costs without cutting quality?',
    answer: "Newsletter automation platforms enable PE portfolio companies to reduce marketing headcount costs by automating content production while maintaining human editorial oversight. With Open Vox, typical savings range from $100,000-$200,000 annually in labor costs while actually increasing content output by 3x. The key is automating the 80% of work that doesn't require human creativity (research, drafting, formatting) while preserving human control over strategy and final approval.",
  },
  {
    id: 'newsletter-automation-roi',
    question: "What's the ROI of B2B newsletter automation?",
    answer: 'B2B newsletter automation typically delivers 300-500% ROI within the first year. Open Vox clients report average payback periods of 2.3 months, with ongoing savings of $10,000+ monthly in reduced content production costs. ROI comes from three sources: (1) direct labor cost reduction, (2) increased output without additional headcount, and (3) improved consistency leading to better engagement metrics.',
  },
  {
    id: 'ebitda-impact',
    question: 'How does Open Vox impact EBITDA margins?',
    answer: 'Open Vox directly impacts EBITDA through marketing cost reduction. Portfolio companies typically see $80K-$150K in annual savings that flow straight to the bottom line—representing 15-20 basis points of margin improvement for mid-market companies. This savings comes from reduced content production headcount, eliminated agency fees, and improved marketing team productivity.',
  },
  {
    id: 'difference-hubspot-mailchimp',
    question: 'What makes Open Vox different from Mailchimp or HubSpot?',
    answer: "Mailchimp and HubSpot are email delivery platforms—they automate sending, but you still create the content manually. Open Vox automates the content creation process itself, which represents 85% of the time investment in newsletter production. Think of it this way: HubSpot is the postal service, Open Vox is the writer. They're complementary—Open Vox integrates with both platforms—but solve fundamentally different problems.",
  },
  {
    id: 'implementation-timeline-pe',
    question: 'How quickly can PE portfolio companies implement Open Vox?',
    answer: 'Most PE portfolio companies are fully operational within 2-3 weeks. Implementation includes: (1) Brand Voice Training setup (3-5 days), (2) Integration with existing martech stack (1-2 days), (3) Content calendar configuration (1 day), and (4) Team training (half day). First automated newsletter typically ships within 14 days of contract signing. For PE firms rolling out across multiple portfolio companies, we offer accelerated multi-company onboarding.',
  },
  {
    id: 'brand-voice-quality',
    question: 'How does Open Vox maintain brand voice in automated newsletters?',
    answer: "Open Vox uses a proprietary Brand Voice Training system that analyzes your existing content library—past newsletters, blog posts, website copy—to learn your specific tone, terminology, and style patterns. The AI then generates content matching these patterns, with 94% of clients reporting output is 'indistinguishable from human-written content' in blind tests. Additionally, all content goes through a human-in-the-loop approval process before sending.",
  },
  {
    id: 'portfolio-deployment',
    question: 'How do PE funds typically deploy Open Vox across portfolio companies?',
    answer: 'PE funds typically deploy Open Vox in phases: (1) Pilot with 2-3 portfolio companies to validate ROI, (2) Standardize the playbook and create deployment templates, (3) Roll out to remaining portfolio with centralized oversight. We offer Portfolio Agreements with consolidated billing, portfolio-level analytics, and MSA structures designed for PE fund operations. Most funds complete portfolio-wide deployment within one quarter.',
  },
  {
    id: 'fte-impact',
    question: "What's the typical FTE impact per portfolio company?",
    answer: 'Open Vox typically enables portfolio companies to avoid 0.5-1.0 FTE in content production roles. For companies with existing content teams, this means reallocation to higher-value strategic work. For companies using agencies, it means eliminating $8K-$15K/month in retainer fees. The net effect: equivalent output of 2-3 content marketers for the cost of one subscription.',
  },
  {
    id: 'security-compliance-pe',
    question: 'What security and compliance standards does Open Vox meet?',
    answer: 'Open Vox maintains SOC 2 Type II certification, GDPR compliance, and CCPA compliance. We offer data residency options for European portfolio companies and maintain minimum $5M cyber insurance coverage. Enterprise plans include SSO/SAML integration, audit logs, and role-based access controls. We provide compliance documentation packages for PE due diligence processes.',
  },
]

export function FAQCFO() {
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
          <h2 className="heading-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="body-large">
            Answers to the questions PE operating partners and CFOs ask most.
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

export default FAQCFO
