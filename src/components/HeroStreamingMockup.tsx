import Image from "next/image";
import Link from "next/link";
import HeroVisualRotator from "@/components/HeroVisualRotator";
export default function HeroStreamingMockup() {
  return <div className="relative">
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-card shadow-2xl shadow-black/30">
      <div className="relative aspect-[16/10] overflow-hidden">
        <HeroVisualRotator />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 sm:p-6"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/80">From match night to movie night</p><p className="mt-2 text-2xl font-bold sm:text-3xl">Your evening. Your screen.</p></div>
      </div>
      <div className="grid grid-cols-3 gap-3 px-4 pb-4 pt-1 sm:gap-4 sm:px-5 sm:pb-5">
        {[{src:"/imgs/movies/movie_1.webp",alt:"Dune: Part Two supplied movie poster"},{src:"/imgs/movies/movie_2.webp",alt:"Oppenheimer supplied movie poster"},{src:"/imgs/movies/movie_4.webp",alt:"John Wick: Chapter 4 supplied movie poster"}].map(movie=><div key={movie.src} className="relative aspect-[2/3] overflow-hidden rounded-xl border border-white/10"><Image src={movie.src} alt={movie.alt} fill sizes="(min-width:1024px) 160px,30vw" className="object-cover" /></div>)}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border px-5 py-4"><span className="text-xs text-muted-foreground">Sports &amp; cinema artwork · availability varies</span><Link href="/channels" className="inline-flex min-h-11 items-center text-sm font-semibold text-accent">Explore categories →</Link></div>
    </div>
  </div>;
}
