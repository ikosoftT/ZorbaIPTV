import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Analytics from "@/components/Analytics";
import SchemaMarkup from "@/components/SchemaMarkup";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
const outfit = Outfit({ variable: "--font-outfit", subsets:["latin"] });
export const metadata: Metadata = {
 metadataBase:new URL(siteConfig.domain), title:{default:siteConfig.defaultTitle,template:`%s | ${siteConfig.brandName}`}, description:siteConfig.defaultDescription,
 openGraph:{title:siteConfig.defaultTitle,description:siteConfig.defaultDescription,url:siteConfig.domain,siteName:siteConfig.brandName,locale:"en_US",type:"website",images:[{url:siteConfig.ogImagePath,width:1200,height:630,alt:"Zorba IPTV live TV and entertainment"}]},
 twitter:{card:"summary_large_image",title:siteConfig.defaultTitle,description:siteConfig.defaultDescription,images:[siteConfig.ogImagePath]},
 icons:{icon:[{url:"/favicon.ico"},{url:"/icon.png",type:"image/png"}],apple:[{url:"/apple-icon.png"}]},
};
export const viewport: Viewport = {width:"device-width",initialScale:1,themeColor:"#090B18"};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) {
 return <html lang="en" className={`${outfit.variable} h-full antialiased`}><body className="relative flex min-h-full flex-col bg-background text-foreground"><a href="#main-content" className="skip-link">Skip to content</a><Navbar /><main id="main-content" className="relative flex-1">{children}</main><Footer /><FloatingWhatsAppButton /><Analytics /><SchemaMarkup schema={{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":absoluteUrl('/#organization'),name:siteConfig.brandName,url:siteConfig.domain,logo:absoluteUrl(siteConfig.logoPath)},{"@type":"WebSite",name:siteConfig.brandName,url:siteConfig.domain,publisher:{"@id":absoluteUrl('/#organization')},inLanguage:"en-US"}]}} /></body></html>;
}
