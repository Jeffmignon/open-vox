import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { MobileStickyCTA } from '@/components/MobileStickyCTA'
import { Hero } from '@/components/landing/Hero'
import { SocialProof } from '@/components/landing/SocialProof'
import { ProblemSolution } from '@/components/landing/ProblemSolution'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { FeatureGrid } from '@/components/landing/FeatureGrid'
import { ExampleOutput } from '@/components/landing/ExampleOutput'
import { RetentionAngle } from '@/components/landing/RetentionAngle'
import { CTASection } from '@/components/landing/CTASection'
import { FAQ } from '@/components/landing/FAQ'
import { SampleNewsletterForm } from '@/components/SampleNewsletterForm'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* Social Proof Band */}
        <SocialProof />

        {/* Problem → Solution */}
        <ProblemSolution />

        {/* How It Works */}
        <HowItWorks />

        {/* Feature Grid */}
        <FeatureGrid />

        {/* Example Output */}
        <ExampleOutput />

        {/* Retention Angle */}
        <RetentionAngle />

        {/* CTA Section */}
        <CTASection />

        {/* Sample Newsletter Generator */}
        <SampleNewsletterForm />

        {/* FAQ */}
        <FAQ />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  )
}
