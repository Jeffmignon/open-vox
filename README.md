# Open Vox Marketing Site

A high-conversion marketing site for Open Vox, an agentic newsletter production platform for marketing teams.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── lead/route.ts       # Lead capture endpoint
│   │   └── sample/route.ts     # Sample newsletter generation
│   ├── pricing/
│   │   └── page.tsx            # Pricing page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Landing page
├── components/
│   ├── landing/                # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── SocialProof.tsx
│   │   ├── ProblemSolution.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── FeatureGrid.tsx
│   │   ├── ExampleOutput.tsx
│   │   ├── RetentionAngle.tsx
│   │   ├── CTASection.tsx
│   │   └── FAQ.tsx
│   ├── pricing/                # Pricing page sections
│   │   ├── PricingCards.tsx
│   │   ├── HowCreditsWork.tsx
│   │   ├── ComparisonTable.tsx
│   │   ├── EstimatorWizard.tsx
│   │   └── PricingFAQ.tsx
│   ├── ui/                     # Reusable UI components
│   │   ├── Accordion.tsx
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   └── Slider.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── MobileStickyCTA.tsx
│   └── SampleNewsletterForm.tsx
├── lib/
│   ├── analytics.ts            # Analytics tracking stubs
│   ├── pricing.ts              # Pricing constants & calculations
│   └── utils.ts                # Utility functions
```

## Pricing Configuration

All pricing constants are centralized in `/lib/pricing.ts`:

```typescript
// Credit calculation
CREDITS_BASE_PER_ISSUE = 40    // Base credits per newsletter issue
CREDITS_PER_CONTENT_PIECE = 8  // Additional credits per content piece

// Tier pricing
STARTER_TIER.price = 39        // $39/month
STARTER_TIER.creditsIncluded = 2000

GROWTH_TIER.platformFee = 79   // $79 base fee
GROWTH_TIER.perCreditPrice = 0.02  // $0.02 per credit
GROWTH_TIER.minCredits = 3000
GROWTH_TIER.maxCredits = 50000
```

### Credit Formula

```
creditsPerIssue = BASE + (PER_ITEM × contentPieces)
monthlyCredits = issuesPerMonth × creditsPerIssue
```

### Example Calculation

Weekly newsletter with 10 content pieces:
- Credits per issue: 40 + (8 × 10) = 120
- Issues per month: 4 (weekly)
- Monthly credits: 4 × 120 = 480

## API Routes

### POST /api/lead

Captures lead data from forms and estimator.

```typescript
// Request body
{
  email: string,
  company?: string,
  source: 'estimator' | 'sample_generator' | 'pricing_cta',
  newsletters?: NewsletterConfig[],
  formData?: SampleFormData
}

// Response
{
  success: boolean,
  message: string,
  leadId: string
}
```

### POST /api/sample

Generates a sample newsletter.

```typescript
// Request body
{
  targetAudience: string,
  contentType: string,
  goal: string,
  newsletterName: string,
  brandVoice: string
}

// Response
{
  subjectLines: string[],
  previewText: string,
  sections: { type: string, title: string, content: string }[],
  nextIdeas: string[]
}
```

## Production Integration

### Analytics

Replace stubs in `/lib/analytics.ts` with your analytics provider:

```typescript
// Example with Segment
export function track(event: AnalyticsEvent, properties?: AnalyticsProperties) {
  if (typeof window !== 'undefined' && window.analytics) {
    window.analytics.track(event, properties)
  }
}
```

### Lead Capture

Update `/app/api/lead/route.ts` to integrate with your CRM:

```typescript
// Example with HubSpot
await hubspot.contacts.create({
  email: data.email,
  company: data.company,
  // ...
})
```

### Newsletter Generation

Update `/app/api/sample/route.ts` to use your AI provider:

```typescript
// Example with OpenAI
const completion = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [/* ... */]
})
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React

## Design System

- **Colors**: Monochrome (black/white/gray)
- **Typography**: Inter (sans), JetBrains Mono (mono)
- **Spacing**: Consistent padding/margins using Tailwind scale
- **Shadows**: Soft, subtle shadows for depth
- **Borders**: Light borders with subtle hover states

## License

Proprietary - All rights reserved.
