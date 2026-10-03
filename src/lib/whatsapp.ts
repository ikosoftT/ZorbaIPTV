import { siteConfig } from "@/lib/site-config";
import { DeviceCount, formatPrice, PricingPlan } from "@/lib/pricing-data";
export function createWhatsAppUrlForMessage(message = "Hi Zorba IPTV, I would like information about your subscriptions and setup options.") {
 const number = siteConfig.whatsappNumber.replace(/\D/g, "");
 return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
export function createWhatsAppOrderUrl(planName: string, price: string, devices?: string | number) {
 return createWhatsAppUrlForMessage(`Hi Zorba IPTV, I would like to order the ${planName} plan for ${price}${devices ? ` with ${devices}` : ""}. Please send me the next steps.`);
}
export function createWhatsAppPlanUrl(plan: PricingPlan, devices: DeviceCount) { return createWhatsAppOrderUrl(plan.duration, formatPrice(plan.price), `${devices} ${devices === 1 ? "connection" : "connections"}`); }
export function createWhatsAppSupportUrl(topic = "setup guidance for my device") { return createWhatsAppUrlForMessage(`Hi Zorba IPTV, I would like assistance regarding: ${topic}.`); }
export function createWhatsAppTrialUrl(device = "not selected yet") { return createWhatsAppUrlForMessage(`Hi Zorba IPTV, I would like to request a free IPTV trial. My device is: ${device}. Please confirm trial availability and duration.`); }
export const whatsappSetupGuidanceUrl = createWhatsAppSupportUrl();
