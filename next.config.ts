import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
    {
        "source": "/blog/prepare-iptv-setup-world-cup-2026-sports",
        "destination": "/blog/prepare-iptv-setup-world-cup-2030-sports",
        "permanent": true
    },
    {
        "source": "/blog/fifa-world-cup-2026-iptv-channels-schedules-viewing-tips",
        "destination": "/blog/fifa-world-cup-2030-iptv-channels-schedules-viewing-tips",
        "permanent": true
    },
    {
        "source": "/blog/watch-fifa-world-cup-2026-iptv-without-buffering",
        "destination": "/blog/watch-fifa-world-cup-2030-iptv-without-buffering",
        "permanent": true
    }
];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "images.pexels.com",   pathname: "/**" },
      // Wikimedia — primary logo source
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/**" },
      // Fallback logo CDNs (kept in case any logo still points here)
      { protocol: "https", hostname: "logo.clearbit.com",   pathname: "/**" },
      // Extra CDNs from user-supplied logo list
      { protocol: "https", hostname: "e7.pngegg.com",           pathname: "/**" },
      { protocol: "https", hostname: "pluspng.com",             pathname: "/**" },
      { protocol: "https", hostname: "cdn.freebiesupply.com",   pathname: "/**" },
      { protocol: "https", hostname: "1000logos.net",           pathname: "/**" },
      { protocol: "https", hostname: "img.favpng.com",          pathname: "/**" },
      { protocol: "https", hostname: "toppng.com",              pathname: "/**" },
      { protocol: "https", hostname: "icon2.cleanpng.com",      pathname: "/**" },
      { protocol: "https", hostname: "www.citypng.com",         pathname: "/**" },
      { protocol: "https", hostname: "logos-world.net",         pathname: "/**" },
      { protocol: "https", hostname: "freepnglogo.com",         pathname: "/**" },
      { protocol: "https", hostname: "static.vecteezy.com",     pathname: "/**" },
      { protocol: "https", hostname: "www.modeiptv.ca",         pathname: "/**" },
      { protocol: "https", hostname: "english.cdn.zeenews.com", pathname: "/**" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com", pathname: "/**" },
      { protocol: "https", hostname: "cwuobserver.com",         pathname: "/**" },
      { protocol: "https", hostname: "image.tmdb.org",          pathname: "/**" },
    ],
  },
};

export default nextConfig;
