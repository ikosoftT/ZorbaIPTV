import { siteConfig } from "@/lib/site-config";
export type DeviceCount = 1 | 2 | 3;
export type PlanDuration = "3 Months" | "6 Months" | "12 Months";
export type PricingPlan = { duration: PlanDuration; months: number; price: number; badge?: "POPULAR" | "BEST VALUE" };
export type PricingDeviceOption = { devices: DeviceCount; label: string; helper: string; plans: PricingPlan[] };
export const basePlans: PricingPlan[] = [
  { duration: "3 Months", months: 3, price: 35 },
  { duration: "6 Months", months: 6, price: 49, badge: "POPULAR" },
  { duration: "12 Months", months: 12, price: 69, badge: "BEST VALUE" },
];
// Owner rule: add 10% of the original base per extra connection, then round to whole dollars.
export function calculateConnectionPrice(basePrice: number, devices: DeviceCount) {
  return Math.round(basePrice * (1 + 0.10 * (devices - 1)));
}
export const planFeatures = [siteConfig.claims.channels, siteConfig.claims.vod, siteConfig.claims.quality, "EPG support", "Compatible TV, mobile & desktop players", "Setup assistance", "WhatsApp support"];
export const pricingDeviceOptions: PricingDeviceOption[] = ([1,2,3] as DeviceCount[]).map(devices => ({
 devices,
 label: `${devices} ${devices === 1 ? "Connection" : "Connections"}`,
 helper: devices === 1 ? "One simultaneous stream. Prices shown are the full plan total." : `${devices} simultaneous streams. Adds ${10 * (devices - 1)}% of the original one-connection plan total.`,
 plans: basePlans.map(plan => ({...plan, price: calculateConnectionPrice(plan.price,devices)})),
}));
export const pricingSummary = basePlans.map(plan => `${plan.duration} — ${formatPrice(plan.price)}`).join("; ");
export const pricingRange = { low: Math.min(...pricingDeviceOptions.flatMap(option=>option.plans.map(plan=>plan.price))), high: Math.max(...pricingDeviceOptions.flatMap(option=>option.plans.map(plan=>plan.price))) };
export function getPricingOption(devices: DeviceCount) { return pricingDeviceOptions.find(option => option.devices === devices) ?? pricingDeviceOptions[0]; }
export function getPricingPlan(devices: DeviceCount, duration: PlanDuration) { return getPricingOption(devices).plans.find(plan => plan.duration === duration) ?? getPricingOption(devices).plans[1]; }
export function formatPrice(price: number) { return `$${price}`; }
