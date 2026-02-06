'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Mail, Sparkles, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { track } from '@/lib/analytics'
import { cn } from '@/lib/utils'

type FormStep = 'input' | 'generating' | 'preview' | 'gated'

interface SampleFormData {
  targetAudience: string
  contentType: string
  goal: string
  newsletterName: string
  brandVoice: string
  email: string
}

interface GeneratedSample {
  subjectLines: string[]
  previewText: string
  sections: {
    type: string
    title: string
    content: string
  }[]
  nextIdeas: string[]
}

const brandVoiceOptions = [
  { value: 'professional', label: 'Professional' },
  { value: 'friendly', label: 'Friendly' },
  { value: 'bold', label: 'Bold' },
  { value: 'technical', label: 'Technical' },
]

const goalOptions = [
  { value: 'lead_nurture', label: 'Lead nurturing' },
  { value: 'product_adoption', label: 'Product adoption' },
  { value: 'retention', label: 'Customer retention' },
  { value: 'education', label: 'Education & tips' },
  { value: 'community', label: 'Community updates' },
]

export function SampleNewsletterForm() {
  const [step, setStep] = useState<FormStep>('input')
  const [formData, setFormData] = useState<SampleFormData>({
    targetAudience: '',
    contentType: '',
    goal: '',
    newsletterName: '',
    brandVoice: 'professional',
    email: '',
  })
  const [sample, setSample] = useState<GeneratedSample | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleInputChange = (field: keyof SampleFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleGenerate = async () => {
    if (!formData.targetAudience || !formData.contentType || !formData.goal || !formData.newsletterName) {
      return
    }

    setIsSubmitting(true)
    setStep('generating')
    track('sample_form_submit', { goal: formData.goal })

    try {
      const response = await fetch('/api/sample', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      setSample(data)
      setStep('preview')
      track('sample_form_complete')
    } catch (error) {
      console.error('Sample generation error:', error)
      setStep('input')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEmailSubmit = async () => {
    if (!formData.email) return

    setIsSubmitting(true)
    track('lead_captured', { source: 'sample_generator' })

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          source: 'sample_generator',
          formData,
        }),
      })
    } catch (error) {
      console.error('Lead capture error:', error)
    }

    setIsSubmitting(false)
    setStep('preview')
  }

  const handleCopySubject = (index: number, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const isFormValid = formData.targetAudience && formData.contentType && formData.goal && formData.newsletterName

  return (
    <section id="sample-generator" className="section">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="pill mb-4">Sample generator</span>
          <h2 className="heading-2 mb-4">See what Open Vox can create for you</h2>
          <p className="body-large">
            Describe your newsletter and get a real AI-generated sample in seconds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card p-6 md:p-8"
        >
          <AnimatePresence mode="wait">
            {/* Input Form */}
            {step === 'input' && (
              <motion.div
                key="input"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Target audience"
                    placeholder="e.g., SaaS founders, enterprise IT leaders"
                    value={formData.targetAudience}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    required
                  />

                  <Input
                    label="Type of content to share"
                    placeholder="e.g., Industry news, product tips, case studies"
                    value={formData.contentType}
                    onChange={(e) => handleInputChange('contentType', e.target.value)}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Select
                    label="Goal of the newsletter"
                    value={formData.goal}
                    onValueChange={(value) => handleInputChange('goal', value)}
                    options={goalOptions}
                    placeholder="Select a goal"
                  />

                  <Input
                    label="Newsletter name"
                    placeholder="e.g., The Weekly Spark"
                    value={formData.newsletterName}
                    onChange={(e) => handleInputChange('newsletterName', e.target.value)}
                    required
                  />
                </div>

                <Select
                  label="Brand voice (optional)"
                  value={formData.brandVoice}
                  onValueChange={(value) => handleInputChange('brandVoice', value)}
                  options={brandVoiceOptions}
                />

                <Button
                  onClick={handleGenerate}
                  disabled={!isFormValid}
                  className="w-full md:w-auto"
                >
                  <Sparkles className="mr-2 w-4 h-4" />
                  Generate my sample
                </Button>
              </motion.div>
            )}

            {/* Generating state */}
            {step === 'generating' && (
              <motion.div
                key="generating"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 border-2 border-foreground border-t-transparent rounded-full animate-spin mx-auto mb-6" />
                <h3 className="text-lg font-semibold mb-2">Generating your sample...</h3>
                <p className="text-muted">
                  Our agent is curating content and drafting your newsletter.
                </p>
              </motion.div>
            )}

            {/* Preview (partial gated) */}
            {(step === 'preview' || step === 'gated') && sample && (
              <motion.div
                key="preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Subject lines */}
                <div>
                  <h3 className="font-semibold mb-3">Subject line options</h3>
                  <div className="space-y-2">
                    {sample.subjectLines.map((subject, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-card-hover rounded-lg"
                      >
                        <span className="text-sm">{subject}</span>
                        <button
                          onClick={() => handleCopySubject(index, subject)}
                          className="p-2 hover:bg-border rounded transition-colors"
                          aria-label="Copy subject line"
                        >
                          {copiedIndex === index ? (
                            <Check className="w-4 h-4 text-foreground" />
                          ) : (
                            <Copy className="w-4 h-4 text-muted" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preview text */}
                <div>
                  <h3 className="font-semibold mb-3">Preview text</h3>
                  <p className="text-sm text-muted p-3 bg-card-hover rounded-lg">
                    {sample.previewText}
                  </p>
                </div>

                {/* Newsletter preview */}
                <div>
                  <h3 className="font-semibold mb-3">Newsletter structure</h3>
                  <div className="terminal-card">
                    <div className="terminal-header">
                      <div className="terminal-dot bg-muted/40" />
                      <div className="terminal-dot bg-muted/40" />
                      <div className="terminal-dot bg-muted/40" />
                      <span className="ml-3 text-xs text-muted-foreground font-mono">
                        {formData.newsletterName.toLowerCase().replace(/\s+/g, '-')}.md
                      </span>
                    </div>
                    <div className="terminal-body">
                      {sample.sections.map((section, index) => (
                        <div
                          key={index}
                          className={cn(
                            'mb-4 last:mb-0',
                            step === 'gated' && index > 1 && 'blur-sm select-none'
                          )}
                        >
                          <div className="text-muted-foreground/60 text-xs uppercase tracking-wider mb-1">
                            {section.type}
                          </div>
                          <div className="text-accent-foreground font-medium mb-1">
                            {section.title}
                          </div>
                          <div className="text-accent-foreground/80 text-sm">
                            {section.content}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email gate or full preview actions */}
                {step === 'gated' || !formData.email ? (
                  <div className="p-6 bg-card-hover rounded-lg">
                    <h3 className="font-semibold mb-2">
                      Enter your email to see the full preview
                    </h3>
                    <p className="text-sm text-muted mb-4">
                      We'll also send you a copy and next issue ideas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        onClick={handleEmailSubmit}
                        isLoading={isSubmitting}
                        disabled={!formData.email}
                      >
                        <Mail className="mr-2 w-4 h-4" />
                        Email me this sample
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Next ideas */}
                    <div>
                      <h3 className="font-semibold mb-3">Next issue ideas</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {sample.nextIdeas.map((idea, index) => (
                          <div
                            key={index}
                            className="p-3 bg-card-hover rounded-lg text-sm"
                          >
                            {idea}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={() => {
                          setStep('input')
                          setSample(null)
                          setFormData((prev) => ({ ...prev, email: '' }))
                        }}
                        variant="secondary"
                      >
                        Generate another sample
                      </Button>
                      <a href="/pricing" className="btn-primary text-center">
                        See pricing
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default SampleNewsletterForm
