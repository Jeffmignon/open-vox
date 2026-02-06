/**
 * Open Vox Pricing Configuration
 *
 * All pricing constants are defined here for easy modification.
 * The credit-based model allows flexible pricing based on usage.
 */

// ============================================================================
// CREDIT CALCULATION CONSTANTS
// ============================================================================

/**
 * Base credits per newsletter issue (covers system overhead, formatting, etc.)
 */
export const CREDITS_BASE_PER_ISSUE = 40

/**
 * Additional credits per content piece in an issue
 */
export const CREDITS_PER_CONTENT_PIECE = 8

/**
 * Maps frequency to number of issues per month
 */
export const FREQUENCY_TO_ISSUES: Record<string, number> = {
  daily: 30,
  '3x_week': 13,
  weekly: 4,
  biweekly: 2,
  monthly: 1,
}

export const FREQUENCY_LABELS: Record<string, string> = {
  daily: 'Daily',
  '3x_week': '3x per week',
  weekly: 'Weekly',
  biweekly: 'Biweekly',
  monthly: 'Monthly',
}

// ============================================================================
// TIER PRICING CONSTANTS
// ============================================================================

/**
 * Starter tier configuration
 */
export const STARTER_TIER = {
  name: 'Starter',
  price: 39,
  creditsIncluded: 2000,
  description: 'For early teams getting started with automated newsletters',
}

/**
 * Growth tier configuration (adjustable credits)
 */
export const GROWTH_TIER = {
  name: 'Growth',
  platformFee: 79,
  perCreditPrice: 0.02,
  minCredits: 3000,
  maxCredits: 50000,
  defaultCredits: 10000,
  description: 'For growing teams with multiple newsletters and automations',
}

/**
 * Enterprise tier configuration
 */
export const ENTERPRISE_TIER = {
  name: 'Enterprise',
  description: 'For organizations needing advanced security, SSO, and custom integrations',
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Calculate credits needed per newsletter issue
 *
 * Formula: BASE + (PER_ITEM * contentPieces)
 *
 * Example:
 *   - 5 content pieces: 40 + (8 * 5) = 80 credits
 *   - 20 content pieces: 40 + (8 * 20) = 200 credits
 */
export function calculateCreditsPerIssue(contentPieces: number): number {
  return CREDITS_BASE_PER_ISSUE + (CREDITS_PER_CONTENT_PIECE * contentPieces)
}

/**
 * Calculate monthly credits for a single newsletter
 *
 * Formula: issuesPerMonth * creditsPerIssue
 *
 * Example (weekly newsletter with 10 content pieces):
 *   - creditsPerIssue = 40 + (8 * 10) = 120
 *   - monthlyCredits = 4 * 120 = 480 credits/month
 */
export function calculateMonthlyCredits(
  frequency: string,
  contentPieces: number
): number {
  const issuesPerMonth = FREQUENCY_TO_ISSUES[frequency] || 1
  const creditsPerIssue = calculateCreditsPerIssue(contentPieces)
  return issuesPerMonth * creditsPerIssue
}

/**
 * Newsletter configuration for estimator
 */
export interface NewsletterConfig {
  frequency: string
  contentPieces: number
  targetAudience?: string
  goal?: string
}

/**
 * Calculate total monthly credits for multiple newsletters
 */
export function calculateTotalMonthlyCredits(
  newsletters: NewsletterConfig[]
): number {
  return newsletters.reduce((total, newsletter) => {
    return total + calculateMonthlyCredits(newsletter.frequency, newsletter.contentPieces)
  }, 0)
}

/**
 * Calculate Growth tier price based on credits
 *
 * Formula: PLATFORM_FEE + (credits * PER_CREDIT_PRICE)
 *
 * Example (10,000 credits):
 *   - Price = $79 + (10000 * $0.02) = $79 + $200 = $279/month
 */
export function calculateGrowthPrice(credits: number): number {
  return GROWTH_TIER.platformFee + (credits * GROWTH_TIER.perCreditPrice)
}

/**
 * Determine recommended tier based on credit needs
 */
export type RecommendedTier = 'starter' | 'growth' | 'enterprise'

export interface TierRecommendation {
  tier: RecommendedTier
  tierName: string
  monthlyPrice: number | null
  creditsNeeded: number
  reason: string
}

export function getRecommendedTier(totalCredits: number): TierRecommendation {
  // Starter tier: up to 2,000 credits
  if (totalCredits <= STARTER_TIER.creditsIncluded) {
    return {
      tier: 'starter',
      tierName: STARTER_TIER.name,
      monthlyPrice: STARTER_TIER.price,
      creditsNeeded: totalCredits,
      reason: `Your usage (${totalCredits.toLocaleString()} credits) fits within the Starter tier's ${STARTER_TIER.creditsIncluded.toLocaleString()} credit allowance.`,
    }
  }

  // Growth tier: 3,000 to 50,000 credits
  if (totalCredits <= GROWTH_TIER.maxCredits) {
    const creditsToUse = Math.max(totalCredits, GROWTH_TIER.minCredits)
    return {
      tier: 'growth',
      tierName: GROWTH_TIER.name,
      monthlyPrice: calculateGrowthPrice(creditsToUse),
      creditsNeeded: totalCredits,
      reason: `Your usage (${totalCredits.toLocaleString()} credits) is best served by the Growth tier with adjustable credits.`,
    }
  }

  // Enterprise: over 50,000 credits
  return {
    tier: 'enterprise',
    tierName: ENTERPRISE_TIER.name,
    monthlyPrice: null,
    creditsNeeded: totalCredits,
    reason: `Your usage (${totalCredits.toLocaleString()} credits) exceeds our standard plans. Let's discuss a custom solution.`,
  }
}

/**
 * Format price for display
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

/**
 * Format credits for display
 */
export function formatCredits(credits: number): string {
  return credits.toLocaleString()
}

// ============================================================================
// EXAMPLE CALCULATIONS (for documentation/testing)
// ============================================================================

/*
Example 1: Single weekly newsletter with 10 content pieces
  - creditsPerIssue = 40 + (8 * 10) = 120
  - issuesPerMonth = 4 (weekly)
  - monthlyCredits = 4 * 120 = 480
  - Fits in Starter tier ($39/mo)

Example 2: Daily newsletter with 5 content pieces
  - creditsPerIssue = 40 + (8 * 5) = 80
  - issuesPerMonth = 30 (daily)
  - monthlyCredits = 30 * 80 = 2,400
  - Needs Growth tier: $79 + (3000 * $0.02) = $139/mo (minimum 3000 credits)

Example 3: Two newsletters
  Newsletter A: 3x/week, 15 pieces
    - creditsPerIssue = 40 + (8 * 15) = 160
    - monthlyCredits = 13 * 160 = 2,080
  Newsletter B: Weekly, 25 pieces
    - creditsPerIssue = 40 + (8 * 25) = 240
    - monthlyCredits = 4 * 240 = 960
  Total: 3,040 credits
  - Needs Growth tier: $79 + (3040 * $0.02) = $139.80/mo
*/
