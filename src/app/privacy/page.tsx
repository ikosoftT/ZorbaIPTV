import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata('Zorba IPTV Privacy Policy', 'Learn how Zorba IPTV handles support messages, optional analytics and contact information, and how to request help with a privacy question.', '/privacy');

export default function PrivacyPage() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <article className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.28em] luxury-gradient-text">Privacy</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-6xl font-serif">Privacy Policy</h1>
        <div className="mt-10 space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-black text-white">Information We Collect</h2>
            <p className="mt-3 leading-7">When you contact Zorba IPTV, we may receive your name, email address, WhatsApp number, selected package, device type, and support details needed to help with setup.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">WhatsApp Communication</h2>
            <p className="mt-3 leading-7">Most sales and support communication happens through WhatsApp. Messages are used to answer questions, provide activation information, and resolve setup issues.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">Cookies and Analytics</h2>
            <p className="mt-3 leading-7">Optional Google Analytics measures page activity and WhatsApp clicks when configured by the site operator. Those events describe the page and selected plan; they do not include your WhatsApp message or account credentials. Your browser privacy settings may limit analytics.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">Data Retention</h2>
            <p className="mt-3 leading-7">Support records may be retained for account assistance, payment follow-up, troubleshooting, and refund review. Contact support through the contact page for privacy questions.</p>
          </section>
        </div>
      </article>
    </div>
  );
}
