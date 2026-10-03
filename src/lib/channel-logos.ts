// Centralized image assets — all images stored locally in /public/imgs/
// NO external URLs, NO Clearbit, NO text logos.

export interface ChannelLogo {
  name: string;
  src: string;
  alt: string;
  category: "sports" | "movies" | "news" | "documentary" | "kids" | "arabic";
}

export interface BackgroundSlider {
  id: number;
  src: string;
  alt: string;
}

export interface MoviePoster {
  id: number;
  src: string;
  alt: string;
  title?: string;
}

// ══════════════════════════════════════════════════════════════════════════
// CHANNEL LOGOS (Local: /public/imgs/logos/logo1.png - logo10.png)
// ══════════════════════════════════════════════════════════════════════════

export const CHANNEL_LOGOS: ChannelLogo[] = [
  { name: "beIN Sports", src: "/imgs/logos/logo1.png", alt: "beIN Sports logo", category: "sports" },
  { name: "Canal+ Sport", src: "/imgs/logos/logo2.png", alt: "Canal+ Sport logo", category: "sports" },
  { name: "LaLiga Hypermotion", src: "/imgs/logos/logo3.png", alt: "LaLiga Hypermotion logo", category: "sports" },
  { name: "LaLiga TV", src: "/imgs/logos/logo4.png", alt: "LaLiga TV logo", category: "sports" },
  { name: "LaLiga", src: "/imgs/logos/logo5.png", alt: "LaLiga logo", category: "sports" },
  { name: "Euronews", src: "/imgs/logos/logo6.png", alt: "Euronews logo", category: "news" },
  { name: "Sky News", src: "/imgs/logos/logo7.png", alt: "Sky News logo", category: "news" },
  { name: "Sky Sports", src: "/imgs/logos/logo8.png", alt: "Sky Sports logo", category: "sports" },
  { name: "TNT Sports", src: "/imgs/logos/logo9.png", alt: "TNT Sports logo", category: "sports" },
  { name: "Eurosport", src: "/imgs/logos/logo10.png", alt: "Eurosport logo", category: "sports" },
  { name: "Netflix", src: "/imgs/logos/logo11.webp", alt: "Netflix logo", category: "movies" }
];

// ══════════════════════════════════════════════════════════════════════════
// BACKGROUND SLIDERS (Local: /public/imgs/bg_sliders/bg_slider_1-3.webp)
// ══════════════════════════════════════════════════════════════════════════

export const BACKGROUND_SLIDERS: BackgroundSlider[] = [
  {
    id: 1,
    src: "/imgs/bg_sliders/bg_slider_1.webp",
    alt: "Background slider 1",
  },
  {
    id: 2,
    src: "/imgs/bg_sliders/bg_slider_2.webp",
    alt: "Background slider 2",
  },
  {
    id: 3,
    src: "/imgs/bg_sliders/bg_slider_3.webp",
    alt: "Background slider 3",
  },
];

// ══════════════════════════════════════════════════════════════════════════
// MOVIE POSTERS (Local: /public/imgs/movies/movie_1-10.webp)
// ══════════════════════════════════════════════════════════════════════════

export const MOVIE_POSTERS: MoviePoster[] = [
  { id: 1, src: "/imgs/movies/movie_1.webp", title: "Dune: Part Two", alt: "Dune: Part Two supplied movie poster" },
  { id: 2, src: "/imgs/movies/movie_2.webp", title: "Oppenheimer", alt: "Oppenheimer supplied movie poster" },
  { id: 3, src: "/imgs/movies/movie_3.webp", title: "The Batman", alt: "The Batman supplied movie poster" },
  { id: 4, src: "/imgs/movies/movie_4.webp", title: "John Wick: Chapter 4", alt: "John Wick: Chapter 4 supplied movie poster" },
  { id: 5, src: "/imgs/movies/movie_5.webp", title: "Killers of the Flower Moon", alt: "Killers of the Flower Moon supplied movie poster" },
  { id: 6, src: "/imgs/movies/movie_6.webp", title: "Killers of the Flower Moon — alternate artwork", alt: "Killers of the Flower Moon — alternate artwork supplied movie poster" },
  { id: 7, src: "/imgs/movies/movie_7.webp", title: "Spider-Man: Across the Spider-Verse", alt: "Spider-Man: Across the Spider-Verse supplied movie poster" },
  { id: 8, src: "/imgs/movies/movie_8.webp", title: "Mission: Impossible — Dead Reckoning", alt: "Mission: Impossible — Dead Reckoning supplied movie poster" },
  { id: 9, src: "/imgs/movies/movie_9.webp", title: "Gladiator II", alt: "Gladiator II supplied movie poster" },
  { id: 10, src: "/imgs/movies/movie_10.webp", title: "Gladiator II — alternate artwork", alt: "Gladiator II — alternate artwork supplied movie poster" }
];

// ══════════════════════════════════════════════════════════════════════════
// PRE-FILTERED EXPORTS BY CATEGORY
// ══════════════════════════════════════════════════════════════════════════

export const SPORTS_LOGOS = CHANNEL_LOGOS.filter((l) => l.category === "sports");
export const MOVIES_LOGOS = CHANNEL_LOGOS.filter((l) => l.category === "movies");
export const NEWS_LOGOS = CHANNEL_LOGOS.filter((l) => l.category === "news");
export const DOCUMENTARY_LOGOS = CHANNEL_LOGOS.filter((l) => l.category === "documentary");
export const KIDS_LOGOS = CHANNEL_LOGOS.filter((l) => l.category === "kids");
export const ARABIC_LOGOS = CHANNEL_LOGOS.filter((l) => l.category === "arabic");

export const STRIP_LOGOS = CHANNEL_LOGOS.slice(0, 11);

// ══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ══════════════════════════════════════════════════════════════════════════

/**
 * Get a random background slider image
 */
export const getRandomBackground = (): BackgroundSlider => {
  const randomIndex = Math.floor(Math.random() * BACKGROUND_SLIDERS.length);
  return BACKGROUND_SLIDERS[randomIndex];
};

/**
 * Get background slider by ID
 */
export const getBackgroundById = (id: number): BackgroundSlider | undefined => {
  return BACKGROUND_SLIDERS.find((bg) => bg.id === id);
};

/**
 * Get movie poster by ID
 */
export const getMovieById = (id: number): MoviePoster | undefined => {
  return MOVIE_POSTERS.find((movie) => movie.id === id);
};

/**
 * Get logo by name
 */
export const getLogoByName = (name: string): ChannelLogo | undefined => {
  return CHANNEL_LOGOS.find((logo) => logo.name === name);
};

/**
 * Get all logos for a specific category
 */
export const getLogosByCategory = (
  category: ChannelLogo["category"]
): ChannelLogo[] => {
  return CHANNEL_LOGOS.filter((logo) => logo.category === category);
};