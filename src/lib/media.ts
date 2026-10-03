

export const premiumImages = {
  heroPoster: "/photos/home-theater.webp",
  heroPreview: "/photos/home-theater.webp",
  homeDevices: "/photos/home-theater.webp",
  homeCta: "/photos/home-theater.webp",
  featureHero: "/photos/home-theater.webp",
  featureSports: "/photos/stadium.webp",
  channelHero: "/photos/home-theater.webp",
  channelSports: "/photos/stadium.webp",
  channelMovies: "/photos/cinema.webp",
  channelInternational: "/photos/home-theater.webp",
  channelNews: "/photos/home-theater.webp",
  channelFamily: "/photos/home-theater.webp",
  channelLifestyle: "/photos/home-theater.webp",
  devicesHero: "/photos/home-theater.webp",
  deviceSmartTv: "/photos/home-theater.webp",
  deviceStreaming: "/photos/home-theater.webp",
  deviceMobile: "/photos/devices.webp",
  deviceOther: "/photos/living-room.webp",
  setupGuidance: "/photos/home-theater.webp",
  pricingHero: "/photos/home-theater.webp",
  planMonthly: "/photos/home-theater.webp",
  planQuarterly: "/photos/home-theater.webp",
  planSemiAnnual: "/photos/home-theater.webp",
  planAnnual: "/photos/home-theater.webp",
  faqHero: "/photos/home-theater.webp",
  contactHero: "/photos/home-theater.webp",
  movieMarquee: "/photos/cinema.webp",
  movieSciFi: "/photos/cinema.webp",
  movieThriller: "/photos/cinema.webp",
  movieFamily: "/photos/cinema.webp",
  sportsMatchNight: "/photos/stadium.webp",
  sportsAction: "/photos/stadium.webp",
  sportsArena: "/photos/stadium.webp",
  sportsFans: "/photos/home-theater.webp",
  topEntertainment: "/photos/home-theater.webp",
  topSports: "/photos/stadium.webp",
  topCinema: "/photos/cinema.webp",
  topInternational: "/photos/home-theater.webp",
};

export type CarouselItem = {
  eyebrow: string;
  title: string;
  description: string;
  meta: string;
  image: string;
  alt: string;
  href?: string;
};

export const trendingMovies: CarouselItem[] = [
  {
    eyebrow: "Hollywood-style VOD",
    title: "Blockbuster Premieres",
    description: "High-energy movie nights, new-release shelves, and premium cinematic categories.",
    meta: "4K and FHD VOD",
    image: premiumImages.movieMarquee,
    alt: "Red cinema seats facing an empty screen",
    href: "/channels",
  },
  {
    eyebrow: "Sci-Fi Worlds",
    title: "Immersive Favorites",
    description: "A polished VOD experience built for action, adventure, sci-fi, and fantasy fans.",
    meta: "Curated movies",
    image: premiumImages.movieSciFi,
    alt: "Red cinema seats facing an empty screen",
    href: "/channels",
  },
  {
    eyebrow: "Crime & Thriller",
    title: "Late Night Suspense",
    description: "Browse darker stories, thrillers, dramas, and intense weekend marathons.",
    meta: "Movie library",
    image: premiumImages.movieThriller,
    alt: "Red cinema seats facing an empty screen",
    href: "/channels",
  },
  {
    eyebrow: "Family Premieres",
    title: "Weekend Watchlist",
    description: "Family-friendly movies, comedy nights, and easy sofa-to-screen entertainment.",
    meta: "Setup assistance",
    image: premiumImages.movieFamily,
    alt: "Red cinema seats facing an empty screen",
    href: "/pricing",
  },
];

export const liveSports: CarouselItem[] = [
  {
    eyebrow: "Live Sports",
    title: "Night Match Energy",
    description: "Premium sports channels for football, basketball, PPV events, and more.",
    meta: "Sports and PPV",
    image: premiumImages.sportsMatchNight,
    alt: "An illuminated football stadium at night",
    href: "/channels",
  },
  {
    eyebrow: "Global Leagues",
    title: "Action Every Week",
    description: "Follow major leagues, tournaments, and weekend fixtures from one place.",
    meta: "Global coverage",
    image: premiumImages.sportsAction,
    alt: "An illuminated football stadium at night",
    href: "/channels",
  },
  {
    eyebrow: "Big Venues",
    title: "Stadium Atmosphere",
    description: "Bring major arenas, finals, and match-day drama into your living room.",
    meta: "Check availability",
    image: premiumImages.sportsArena,
    alt: "An illuminated football stadium at night",
    href: "/features",
  },
  {
    eyebrow: "Fan Nights",
    title: "Watch Together",
    description: "Keep the live feed close for parties, family nights, and weekend fixtures.",
    meta: "Multi-device",
    image: premiumImages.sportsFans,
    alt: "An illuminated football stadium at night",
    href: "/devices",
  },
];

export const topChannels: CarouselItem[] = [
  {
    eyebrow: "Entertainment",
    title: "Premium Networks",
    description: "Movie, series, documentary, and lifestyle channels arranged for fast discovery.",
    meta: "Entertainment categories",
    image: premiumImages.topEntertainment,
    alt: "A modern living room with a wall-mounted television",
    href: "/channels",
  },
  {
    eyebrow: "Sports",
    title: "Live Event Channels",
    description: "Stay close to major fixtures, PPV nights, and international sports coverage.",
    meta: "Confirm your event",
    image: premiumImages.topSports,
    alt: "An illuminated football stadium at night",
    href: "/channels",
  },
  {
    eyebrow: "Cinema",
    title: "Movie Channels",
    description: "A cinematic channel mix designed for evenings, weekends, and family viewing.",
    meta: "VOD included",
    image: premiumImages.topCinema,
    alt: "Red cinema seats facing an empty screen",
    href: "/channels",
  },
  {
    eyebrow: "International",
    title: "Worldwide Lineup",
    description: "Channels from the USA, UK, Europe, Latino, Arabic, Asian regions, and more.",
    meta: "26,000+ live",
    image: premiumImages.topInternational,
    alt: "A modern living room with a wall-mounted television",
    href: "/channels",
  },
];
