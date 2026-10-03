const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zorbaiptv.cc";
const parsedUrl = new URL(configuredUrl);
if (!['https:', 'http:'].includes(parsedUrl.protocol)) throw new Error('SITE_URL must use HTTP or HTTPS');

export const siteConfig = {
  brandName: "Zorba IPTV",
  domain: parsedUrl.origin,
  // Owner contact retained from the original repository.
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "212624637669",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "",
  analyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
  logoPath: "/logo.png",
  ogImagePath: "/og-image.jpg",
  defaultTitle: "Zorba IPTV | Live TV, Sports, Movies & IPTV Plans",
  defaultDescription: "Explore Zorba IPTV plans, live TV categories, sports, movies, device setup guides and a free trial. Order or ask questions through WhatsApp.",
  updatedAt: "2026-10-03",
  stats: { channels: "26,000+", vod: "100,000+" },
  legalDisclaimer: "Channel availability and schedules may change. Names and trademarks belong to their respective owners and do not imply affiliation or endorsement. Contact Zorba IPTV before ordering if a specific channel or event is important to you.",
  claims: {
    channels: "26,000+ Live Channels",
    vod: "100,000+ VOD Titles",
    quality: "HD / FHD / 4K where available",
    support: "WhatsApp setup support",
    refund: "Support-led refund review",
    devices: "Smart TV, Fire TV, Android / Google TV, Apple TV, iPhone/iPad, Windows/macOS",
    devicePolicy: "Base plans include one simultaneous connection. Two connections add 10% and three add 20% of the original base plan price. Install on compatible devices; the selected allowance controls simultaneous streams.",
  },
} as const;

export function absoluteUrl(path = "/") { return new URL(path, `${siteConfig.domain}/`).toString(); }
