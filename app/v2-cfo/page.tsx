import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HeroCFO } from '@/components/v2-cfo/HeroCFO'
import { PEProofBar } from '@/components/v2-cfo/PEProofBar'
import { CostProblem } from '@/components/v2-cfo/CostProblem'
import { BuiltForPE } from '@/components/v2-cfo/BuiltForPE'
import { BoardQuestions } from '@/components/v2-cfo/BoardQuestions'
import { AlternativesComparison } from '@/components/v2-cfo/AlternativesComparison'
import { CFOTestimonial } from '@/components/v2-cfo/CFOTestimonial'
import { ROICalculator } from '@/components/v2-cfo/ROICalculator'
import { FAQCFO } from '@/components/v2-cfo/FAOCFO'
import { CTACFO } from '@/components/v2-cfo/CTACFO'

export const metadata: Metadata = {
  title: 'Open Vox | Newsletter Automation for PE-Backed Companies | Reduce Marketing Costs 70%',
  description: 'Open Vox helps PE-backed B2B companies automate newsletter production, reducing marketing costs by 70% while scaling content output 3x. Purpose-built for portfolio company efficiency. Average savings: $127K/year.',
  keywords: [
    'newsletter automation PE portfolio companies',
    'reduce marketing costs SaaS',
    'B2B content automation ROI',
    'marketing efficiency PE-backed companies',
    'EBITDA improvement marketing',
    'private equity marketing automation',
    'portfolio company marketing tools',
  ],
  openGraph: {
    title: 'Open Vox | Newsletter Automation for PE-Backed Companies',
    description: 'Reduce marketing costs 70% while scaling content output 3x. Built for PE portfolio operations.',
    type: 'website',
  },
}

// JSON-LD Structured Data for AEO/GEO
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://openvox.io/#software',
      name: 'Open Vox',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Marketing Automation Software',
      operatingSystem: 'Web-based',
      description: 'AI-powered newsletter automation platform for PE-backed B2B companies seeking to reduce marketing costs while scaling content output.',
      url: 'https://openvox.io',
      offers: {
        '@type': 'Offer',
        category: 'SaaS Subscription',
        priceCurrency: 'USD',
      },
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'CFOs and Marketing Leaders at PE-backed SMEs',
      },
      featureList: [
        'AI-powered newsletter content generation',
        'Brand voice preservation technology',
        'Multi-portfolio management dashboard',
        'ROI tracking for operating partners',
        'Integration with HubSpot, Salesforce, Marketo',
        'Human-in-the-loop quality control',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '127',
        bestRating: '5',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://openvox.io/#organization',
      name: 'Open Vox',
      url: 'https://openvox.io',
      description: 'Provider of AI-powered newsletter automation for PE-backed B2B companies',
      knowsAbout: [
        'Newsletter Automation',
        'B2B Marketing',
        'Private Equity Portfolio Operations',
        'Marketing Cost Optimization',
        'AI Content Generation',
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://openvox.io/v2-cfo#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best newsletter automation tool for PE-backed companies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Open Vox is purpose-built for PE-backed companies, offering 70% cost reduction in newsletter production while maintaining brand quality. Unlike general marketing automation tools, it's designed for the efficiency metrics PE operating partners prioritize.",
          },
        },
        {
          '@type': 'Question',
          name: 'How can PE portfolio companies reduce marketing costs without cutting quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Newsletter automation platforms like Open Vox allow PE portfolio companies to reduce marketing headcount costs by automating content production. Typical savings range from $100,000-$200,000 annually while actually increasing content output by 3x.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the ROI of B2B newsletter automation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'B2B newsletter automation typically delivers 300-500% ROI within the first year. Open Vox clients report average payback periods of 2.3 months, with ongoing savings of $10,000+ monthly in reduced content production costs.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Open Vox impact EBITDA margins?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Open Vox directly impacts EBITDA through marketing cost reduction. Portfolio companies typically see $80K-$150K in annual savings—representing 15-20 basis points of margin improvement for mid-market companies.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes Open Vox different from Mailchimp or HubSpot?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Mailchimp and HubSpot automate email delivery, but you still create content manually. Open Vox automates content creation itself—85% of newsletter production time. They're complementary tools solving different problems.",
          },
        },
        {
          '@type': 'Question',
          name: 'How quickly can PE portfolio companies implement Open Vox?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most PE portfolio companies are fully operational within 2-3 weeks, with first automated newsletter shipping within 14 days of contract signing.',
          },
        },
      ],
    },
  ],
}

export default function V2CFOPage() {
  return (
    <>
      {/* Structured Data for AEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />
      <main className="min-h-screen">
        {/* Hero - CFO focused headline and metrics */}
        <HeroCFO />

        {/* PE Firm Social Proof */}
        <PEProofBar />

        {/* Cost Problem - The math that doesn't work */}
        <CostProblem />

        {/* Built for PE - Portfolio deployment focus */}
        <BuiltForPE />

        {/* Board Questions - Q&A format for sponsors */}
        <BoardQuestions />

        {/* Alternatives Comparison - The math your board will ask */}
        <AlternativesComparison />

        {/* CFO Testimonial - Named quotes with metrics */}
        <CFOTestimonial />

        {/* ROI Calculator - Model your scenario */}
        <ROICalculator />

        {/* FAQ - AEO optimized */}
        <FAQCFO />

        {/* CTA - Portfolio ROI analysis */}
        <CTACFO />
      </main>
      <Footer />
    </>
  )
}
