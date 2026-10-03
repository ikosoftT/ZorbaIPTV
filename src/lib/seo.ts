import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
export function pageMetadata(title: string, description: string, path: string, image: string = siteConfig.ogImagePath): Metadata {
 return { title: { absolute: title.includes('Zorba IPTV') ? title : `${title} | Zorba IPTV` }, description, alternates: { canonical: absoluteUrl(path) }, openGraph: { title, description, url: absoluteUrl(path), siteName: siteConfig.brandName, locale: 'en_US', type: 'website', images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: `${siteConfig.brandName} — ${title}` }] }, twitter: { card: 'summary_large_image', title, description, images: [absoluteUrl(image)] } };
}
export function breadcrumbSchema(items: { name: string; path: string }[]) { return { '@type': 'BreadcrumbList', itemListElement: items.map((item,i) => ({ '@type': 'ListItem', position:i+1, name:item.name, item:absoluteUrl(item.path) })) }; }
