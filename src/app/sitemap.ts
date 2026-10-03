import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
export default function sitemap(): MetadataRoute.Sitemap {
 const routes=['/','/pricing','/features','/channels','/devices','/faq','/contact','/blog','/guides','/support','/terms','/privacy','/refund-policy','/disclaimer','/free-trial','/about'];
 return [...routes.map(path=>({url:absoluteUrl(path),lastModified:new Date(siteConfig.updatedAt),changeFrequency:'monthly' as const,priority:path==='/'?1:0.8})),...blogPosts.map(post=>({url:absoluteUrl(`/blog/${post.slug}`),lastModified:new Date(post.lastUpdated ?? post.date),changeFrequency:'monthly' as const,priority:0.7}))];
}
