import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PricingCards } from '@/components/pricing/PricingCards'
import { HowCreditsWork } from '@/components/pricing/HowCreditsWork'
import { ComparisonTable } from '@/components/pricing/ComparisonTable'
import { EstimatorWizard } from '@/components/pricing/EstimatorWizard'
import { PricingFAQ } from '@/components/pricing/PricingFAQ'
import { SampleNewsletterForm } from '@/components/SampleNewsletterForm'

export const metadata = {
  title: 'Pricing - Open Vox',
  description: 'Simple, transparent pricing for agentic newsletter production. Start free, scale as you grow.',
}

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="section-tight text-center">
          <div className="container-narrow">
            <span className="pill mb-4">Pricing</span>
            <h1 className="heading-1 mb-4">
              Simple, predictable pricing
            </h1>
            <p className="body-large max-w-2xl mx-auto">
              Pay for what you use. Start with a free sample, then scale with credits as your newsletter program grows.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <PricingCards />

        {/* How Credits Work */}
        <HowCreditsWork />

        {/* Estimator Wizard */}
        <EstimatorWizard />

        {/* Comparison Table */}
        <ComparisonTable />

        {/* Sample Newsletter Generator */}
        <SampleNewsletterForm />

        {/* Pricing FAQ */}
        <PricingFAQ />
      </main>
      <Footer />
    </>
  )
}
