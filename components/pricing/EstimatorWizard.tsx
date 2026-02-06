'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Slider } from '@/components/ui/Slider'
import {
  FREQUENCY_LABELS,
  calculateTotalMonthlyCredits,
  getRecommendedTier,
  formatCredits,
  formatPrice,
  NewsletterConfig,
} from '@/lib/pricing'
import { track } from '@/lib/analytics'
import { cn } from '@/lib/utils'

type WizardStep = 'count' | 'newsletters' | 'details' | 'contact' | 'result'

interface NewsletterData extends NewsletterConfig {
  id: number
}

const frequencyOptions = Object.entries(FREQUENCY_LABELS).map(([value, label]) => ({
  value,
  label,
}))

const goalOptions = [
  { value: 'lead_nurture', label: 'Lead nurturing' },
  { value: 'product_adoption', label: 'Product adoption' },
  { value: 'retention', label: 'Customer retention' },
  { value: 'upsell', label: 'Upsell / cross-sell' },
  { value: 'community', label: 'Community engagement' },
]

export function EstimatorWizard() {
  const [step, setStep] = useState<WizardStep>('count')
  const [newsletterCount, setNewsletterCount] = useState(1)
  const [currentNewsletterIndex, setCurrentNewsletterIndex] = useState(0)
  const [newsletters, setNewsletters] = useState<NewsletterData[]>([])
  const [contactInfo, setContactInfo] = useState({ email: '', company: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    track('estimator_start')
  }, [])

  const initializeNewsletters = () => {
    const initial: NewsletterData[] = Array.from({ length: newsletterCount }, (_, i) => ({
      id: i + 1,
      frequency: 'weekly',
      contentPieces: 10,
      targetAudience: '',
      goal: '',
    }))
    setNewsletters(initial)
    setCurrentNewsletterIndex(0)
    setStep('newsletters')
    track('estimator_step', { step: 'newsletters', count: newsletterCount })
  }

  const updateCurrentNewsletter = (updates: Partial<NewsletterData>) => {
    setNewsletters((prev) =>
      prev.map((nl, i) =>
        i === currentNewsletterIndex ? { ...nl, ...updates } : nl
      )
    )
  }

  const handleNextNewsletter = () => {
    if (currentNewsletterIndex < newsletters.length - 1) {
      setCurrentNewsletterIndex((prev) => prev + 1)
    } else {
      setStep('details')
      track('estimator_step', { step: 'details' })
    }
  }

  const handlePrevNewsletter = () => {
    if (currentNewsletterIndex > 0) {
      setCurrentNewsletterIndex((prev) => prev - 1)
    } else {
      setStep('count')
    }
  }

  const handleContactSubmit = async () => {
    if (!contactInfo.email || !contactInfo.company) return

    setIsSubmitting(true)
    track('estimator_step', { step: 'contact' })

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Post lead data
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: contactInfo.email,
          company: contactInfo.company,
          source: 'estimator',
          newsletters: newsletters,
        }),
      })
    } catch (error) {
      console.error('Lead capture error:', error)
    }

    setIsSubmitting(false)
    setStep('result')
    track('estimator_complete', {
      newsletters: newsletters.length,
      totalCredits: calculateTotalMonthlyCredits(newsletters),
    })
  }

  const totalCredits = calculateTotalMonthlyCredits(newsletters)
  const recommendation = getRecommendedTier(totalCredits)

  const currentNewsletter = newsletters[currentNewsletterIndex]

  return (
    <section id="estimator" className="section">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="pill mb-4">Estimator</span>
          <h2 className="heading-2 mb-4">Estimate your exact price</h2>
          <p className="body-large">
            Answer a few questions to get a personalized pricing estimate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card p-6 md:p-8"
        >
          {/* Progress indicator */}
          <div className="flex items-center justify-between mb-8">
            {['count', 'newsletters', 'details', 'contact', 'result'].map((s, i) => (
              <div key={s} className="flex items-center">
                <div
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium',
                    step === s
                      ? 'bg-foreground text-background'
                      : ['count', 'newsletters', 'details', 'contact', 'result'].indexOf(step) > i
                      ? 'bg-foreground text-background'
                      : 'bg-card-hover text-muted'
                  )}
                >
                  {['count', 'newsletters', 'details', 'contact', 'result'].indexOf(step) > i ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    i + 1
                  )}
                </div>
                {i < 4 && (
                  <div
                    className={cn(
                      'w-12 md:w-20 h-px mx-2',
                      ['count', 'newsletters', 'details', 'contact', 'result'].indexOf(step) > i
                        ? 'bg-foreground'
                        : 'bg-border'
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Newsletter count */}
            {step === 'count' && (
              <motion.div
                key="count"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    How many newsletters do you want to create?
                  </h3>
                  <p className="text-sm text-muted">
                    You can run multiple newsletters for different audiences or products.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Input
                    type="number"
                    min={1}
                    max={20}
                    value={newsletterCount}
                    onChange={(e) =>
                      setNewsletterCount(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-24 text-center"
                  />
                  <span className="text-muted">newsletter{newsletterCount > 1 ? 's' : ''}</span>
                </div>

                {newsletterCount > 10 && (
                  <p className="text-sm text-muted">
                    For 10+ newsletters, we recommend talking to our sales team for a custom plan.
                  </p>
                )}

                <Button onClick={initializeNewsletters} className="w-full md:w-auto">
                  Continue
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            )}

            {/* Step 2: Newsletter details */}
            {step === 'newsletters' && currentNewsletter && (
              <motion.div
                key={`newsletter-${currentNewsletterIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="pill text-xs">
                      Newsletter {currentNewsletterIndex + 1} of {newsletters.length}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">
                    Tell us about newsletter #{currentNewsletterIndex + 1}
                  </h3>
                </div>

                <Select
                  label="How often do you want to send it?"
                  value={currentNewsletter.frequency}
                  onValueChange={(value) => updateCurrentNewsletter({ frequency: value })}
                  options={frequencyOptions}
                />

                <div>
                  <label className="input-label">
                    How many content pieces per issue?
                  </label>
                  <Slider
                    min={1}
                    max={50}
                    step={1}
                    value={[currentNewsletter.contentPieces]}
                    onValueChange={(value) =>
                      updateCurrentNewsletter({ contentPieces: value[0] })
                    }
                    showValue
                    formatValue={(v) => `${v} pieces`}
                  />
                </div>

                <Input
                  label="Who is your target audience?"
                  placeholder="e.g., Trial users, Enterprise customers, Developers"
                  value={currentNewsletter.targetAudience || ''}
                  onChange={(e) =>
                    updateCurrentNewsletter({ targetAudience: e.target.value })
                  }
                />

                <Select
                  label="Primary goal (optional)"
                  value={currentNewsletter.goal || ''}
                  onValueChange={(value) => updateCurrentNewsletter({ goal: value })}
                  options={goalOptions}
                  placeholder="Select a goal"
                />

                <div className="flex gap-4">
                  <Button variant="secondary" onClick={handlePrevNewsletter}>
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back
                  </Button>
                  <Button onClick={handleNextNewsletter} className="flex-1">
                    {currentNewsletterIndex < newsletters.length - 1
                      ? 'Next newsletter'
                      : 'Continue'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Summary before contact */}
            {step === 'details' && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">Your configuration</h3>
                  <p className="text-sm text-muted">
                    Review your newsletters before we calculate your estimate.
                  </p>
                </div>

                <div className="space-y-3">
                  {newsletters.map((nl, i) => (
                    <div
                      key={nl.id}
                      className="p-4 bg-card-hover rounded-lg flex items-center justify-between"
                    >
                      <div>
                        <div className="font-medium">Newsletter {i + 1}</div>
                        <div className="text-sm text-muted">
                          {FREQUENCY_LABELS[nl.frequency]} • {nl.contentPieces} pieces
                          {nl.targetAudience && ` • ${nl.targetAudience}`}
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setCurrentNewsletterIndex(i)
                          setStep('newsletters')
                        }}
                        className="text-sm text-muted hover:text-foreground"
                      >
                        Edit
                      </button>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-foreground text-background rounded-lg">
                  <div className="flex justify-between items-center">
                    <span>Estimated monthly credits</span>
                    <span className="text-xl font-semibold">
                      {formatCredits(totalCredits)}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setCurrentNewsletterIndex(newsletters.length - 1)
                      setStep('newsletters')
                    }}
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back
                  </Button>
                  <Button onClick={() => setStep('contact')} className="flex-1">
                    Get my estimate
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact info */}
            {step === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Where should we send your estimate?
                  </h3>
                  <p className="text-sm text-muted">
                    We'll send you a detailed breakdown plus a sample newsletter.
                  </p>
                </div>

                <Input
                  label="Work email"
                  type="email"
                  placeholder="you@company.com"
                  value={contactInfo.email}
                  onChange={(e) =>
                    setContactInfo((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                />

                <Input
                  label="Company name"
                  placeholder="Acme Inc."
                  value={contactInfo.company}
                  onChange={(e) =>
                    setContactInfo((prev) => ({ ...prev, company: e.target.value }))
                  }
                  required
                />

                <div className="flex gap-4">
                  <Button variant="secondary" onClick={() => setStep('details')}>
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back
                  </Button>
                  <Button
                    onClick={handleContactSubmit}
                    isLoading={isSubmitting}
                    disabled={!contactInfo.email || !contactInfo.company}
                    className="flex-1"
                  >
                    See my estimate
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Results */}
            {step === 'result' && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Your estimate is ready</h3>
                  <p className="text-muted">
                    We've also sent this to {contactInfo.email}
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="p-6 bg-card-hover rounded-lg text-center">
                    <div className="text-sm text-muted mb-1">Monthly credits needed</div>
                    <div className="text-3xl font-semibold">
                      {formatCredits(totalCredits)}
                    </div>
                  </div>

                  <div className="p-6 bg-foreground text-background rounded-lg text-center">
                    <div className="text-sm opacity-70 mb-1">Recommended plan</div>
                    <div className="text-3xl font-semibold mb-2">
                      {recommendation.tierName}
                    </div>
                    {recommendation.monthlyPrice && (
                      <div className="text-xl opacity-90">
                        {formatPrice(recommendation.monthlyPrice)}/month
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted text-center">
                  {recommendation.reason}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#sample-generator"
                    className="btn-primary flex-1 text-center"
                  >
                    Generate my sample newsletter
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  {recommendation.tier === 'enterprise' && (
                    <a
                      href="mailto:sales@openvox.io"
                      className="btn-secondary flex-1 text-center"
                    >
                      Talk to sales
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default EstimatorWizard
