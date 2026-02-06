/**
 * Lightweight analytics stub for tracking events
 *
 * Replace these implementations with your actual analytics provider
 * (e.g., Segment, Mixpanel, PostHog, etc.)
 */

export type AnalyticsEvent =
  | 'page_view'
  | 'cta_click'
  | 'sample_form_start'
  | 'sample_form_submit'
  | 'sample_form_complete'
  | 'estimator_start'
  | 'estimator_step'
  | 'estimator_complete'
  | 'lead_captured'
  | 'pricing_slider_change'
  | 'tier_selected'
  | 'faq_expand'

export interface AnalyticsProperties {
  [key: string]: string | number | boolean | undefined
}

/**
 * Track an analytics event
 */
export function track(event: AnalyticsEvent, properties?: AnalyticsProperties): void {
  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', event, properties)
  }

  // TODO: Replace with actual analytics implementation
  // Example with Segment:
  // if (typeof window !== 'undefined' && window.analytics) {
  //   window.analytics.track(event, properties)
  // }
}

/**
 * Identify a user/lead
 */
export function identify(
  email: string,
  properties?: AnalyticsProperties
): void {
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Identify:', email, properties)
  }

  // TODO: Replace with actual analytics implementation
}

/**
 * Track a page view
 */
export function pageView(path: string): void {
  track('page_view', { path })
}
