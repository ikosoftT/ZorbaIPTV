"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useReducedMotion from "@/hooks/useReducedMotion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { MOVIE_POSTERS } from "@/lib/channel-logos";
export default function MovieCarousel(){
const [paused,setPaused]=useState(false);
const [hovered,setHovered]=useState(false);
const [focused,setFocused]=useState(false);
const reducedMotion=useReducedMotion();
const [ref,api]=useEmblaCarousel({align:"start",loop:true,duration:35});
useEffect(()=>{
 if(!api||paused||hovered||focused||reducedMotion)return;
 const timer=window.setInterval(()=>{if(!document.hidden)api.scrollNext();},3500);
 return ()=>window.clearInterval(timer);
},[api,paused,hovered,focused,reducedMotion]);
const previous=()=>api?.scrollPrev(!reducedMotion?false:true);
const next=()=>api?.scrollNext(!reducedMotion?false:true);
return <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8" aria-label="Movie artwork showcase"><div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Make it a movie evening</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Stories for your watchlist.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">Movie artwork from the supplied library. Ask support about specific titles; artwork is illustrative and does not confirm catalogue availability.</p></div><div className="flex flex-wrap gap-2"><button type="button" aria-pressed={paused} disabled={reducedMotion} onClick={()=>setPaused(!paused)} className="secondary-button !min-h-11 !px-4 disabled:opacity-70">{reducedMotion?"Autoplay off: reduced motion":paused?"Resume movie autoplay":"Pause movie autoplay"}</button><button type="button" aria-label="Previous movie" onClick={previous} className="secondary-button !min-h-11 !p-3"><ChevronLeft className="h-5 w-5" /></button><button type="button" aria-label="Next movie" onClick={next} className="secondary-button !min-h-11 !p-3"><ChevronRight className="h-5 w-5" /></button></div></div><div ref={ref} className="overflow-hidden" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} onFocusCapture={()=>setFocused(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget))setFocused(false);}}><div className="-ml-5 flex">{MOVIE_POSTERS.map(movie=><article key={movie.id} className="min-w-0 flex-[0_0_72%] pl-5 sm:flex-[0_0_33.33%] lg:flex-[0_0_22%]"><Link href="/channels" className="group block overflow-hidden rounded-2xl border border-border bg-card"><div className="relative aspect-[2/3]"><Image src={movie.src} alt={movie.alt} fill sizes="(min-width:1024px) 260px,(min-width:640px) 33vw,72vw" className="object-cover" /></div><div className="p-4"><h3 className="text-base font-bold">{movie.title}</h3><p className="mt-3 flex items-center gap-2 text-xs text-accent">Check availability <ArrowUpRight className="h-4 w-4" /></p></div></Link></article>)}</div></div></section>}
