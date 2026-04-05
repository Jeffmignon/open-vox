'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Download, ArrowRight } from 'lucide-react'
import { Slider } from '@/components/ui/Slider'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { track } from '@/lib/analytics'

export function ROICalculator() {
  const [currentSpend, setCurrentSpend] = useState([12000])
  const [newslettersPerMonth, setNewslettersPerMonth] = useState([4])
  const [showResults, setShowResults] = useState(false)
  const [email, setEmail] = useState('')

  // Calculations
  const currentCostPerNewsletter = currentSpend[0] / newslettersPerMonth[0]
  const openVoxCost = 2500 // Base Growth plan
  const openVoxNewsletters = 12
  const openVoxCostPerNewsletter = openVoxCost / openVoxNewsletters

  const monthlySavings = currentSpend[0] - openVoxCost
  const annualSavings = monthlySavings * 12
  const paybackDays = Math.round((openVoxCost / monthlySavings) * 30)

  const handleCalculate = () => {
    setShowResults(true)
    track('cta_click', { location: 'roi_calculator', action: 'calculate' })
  }

  const handleDownload = () => {
    track('cta_click', { location: 'roi_calculator', action: 'download_pdf' })
    // In production, this would generate a PDF
    alert('In production, this would download a board-ready PDF summary.')
  }

  return (
    <section id="roi-calculator" className="section bg-card/50 border-y border-border">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="pill mb-4">ROI Calculator</span>
          <h2 className="heading-2 mb-4">
            Calculate Your Savings
          </h2>
          <p className="body-large">
            Model your specific scenario. See the math before you commit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card p-6 md:p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-5 h-5 text-muted" />
                <h3 className="font-semibold">Your Current State</h3>
              </div>

              <div>
                <label className="input-label">
                  Monthly content spend (agency, freelance, or FTE allocation)
                </label>
                <Slider
                  min={2000}
                  max={30000}
                  step={500}
                  value={currentSpend}
                  onValueChange={setCurrentSpend}
                  showValue
                  formatValue={(v) => `$${v.toLocaleString()}`}
                />
              </div>

              <div>
                <label className="input-label">
                  Newsletters produced per month
                </label>
                <Slider
                  min={1}
                  max={12}
                  step={1}
                  value={newslettersPerMonth}
                  onValueChange={setNewslettersPerMonth}
                  showValue
                  formatValue={(v) => `${v} newsletters`}
                />
              </div>

              <div className="p-4 bg-card-hover rounded-lg">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted">Your cost per newsletter</span>
                  <span className="font-mono font-medium">
                    ${currentCostPerNewsletter.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="text-xs text-muted">
                  Industry benchmark: $350-$500 per newsletter
                </div>
              </div>

              {!showResults && (
                <Button onClick={handleCalculate} className="w-full">
                  Calculate My Savings
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              )}
            </div>

            {/* Results */}
            <div>
              {showResults ? (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="font-semibold mb-4">Your Projected Impact</h3>

                  <div className="p-4 bg-foreground text-background rounded-lg space-y-3">
                    <div className="text-xs uppercase tracking-wider opacity-70 mb-2">
                      With Open Vox
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">Monthly subscription</span>
                      <span className="font-mono">${openVoxCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">Newsletters produced</span>
                      <span className="font-mono">{openVoxNewsletters}/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">Cost per newsletter</span>
                      <span className="font-mono">
                        ${openVoxCostPerNewsletter.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-card-hover rounded-lg text-center">
                      <div className="text-2xl font-semibold text-foreground">
                        ${monthlySavings.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted">Monthly savings</div>
                    </div>
                    <div className="p-4 bg-card-hover rounded-lg text-center">
                      <div className="text-2xl font-semibold text-foreground">
                        ${annualSavings.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted">Annual EBITDA impact</div>
                    </div>
                  </div>

                  <div className="p-4 bg-card-hover rounded-lg text-center">
                    <div className="text-3xl font-semibold text-foreground">
                      {paybackDays} days
                    </div>
                    <div className="text-sm text-muted">Payback period</div>
                  </div>

                  <div className="pt-4 border-t border-border space-y-3">
                    <Input
                      type="email"
                      placeholder="Enter email for board-ready PDF"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                      variant="secondary"
                      onClick={handleDownload}
                      className="w-full"
                      disabled={!email}
                    >
                      <Download className="mr-2 w-4 h-4" />
                      Download Board Summary PDF
                    </Button>
                  </div>

                  <p className="text-xs text-muted text-center">
                    Conservative estimate based on median customer results.
                    Actual savings may vary.
                  </p>
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center text-muted">
                    <Calculator className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p>Enter your current spend to see projected savings</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ROICalculator
