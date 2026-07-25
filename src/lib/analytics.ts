type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

/**
 * Abstraction for analytics events.
 * Currently mock/no-op — replace with real provider when ready.
 * Never send PII (name, phone, email) through this function.
 */
export function trackEvent(name: string, properties?: AnalyticsPayload) {
  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", name, properties ?? {});
  }
  // TODO: Connect to GA4 / Meta Pixel / CRM when provider is confirmed
}