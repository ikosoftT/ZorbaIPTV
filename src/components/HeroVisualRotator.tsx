"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useReducedMotion from "@/hooks/useReducedMotion";

const slides = [
  { src: "/imgs/sports/bg3.jpg", alt: "Football players competing for the ball during a match" },
  { src: "/imgs/bg_sliders/bg_slider_1.webp", alt: "Supplied action movie artwork with a desert setting" },
  { src: "/imgs/sports/bg4.jpg", alt: "A football player celebrating with a trophy in a stadium" },
  { src: "/imgs/bg_sliders/bg_slider_3.webp", alt: "Supplied fantasy movie artwork with a colorful city setting" },
  { src: "/imgs/sports/bg5.jpg", alt: "Supplied combat sports promotional artwork" },
  { src: "/imgs/bg_sliders/bg_slider_2.webp", alt: "Supplied science fiction movie artwork with ape characters" },
];

export default function HeroVisualRotator() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [timerVersion, setTimerVersion] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive(index => (index + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, timerVersion]);

  function change(direction: number) {
    setActive(index => (index + direction + slides.length) % slides.length);
    setTimerVersion(version => version + 1);
  }

  return <div className="absolute inset-0 overflow-hidden" role="group" aria-label="Sports and movie artwork slideshow">
    {slides.map((slide, index) => <div key={slide.src} aria-hidden={index !== active} className={`absolute inset-0 transition-opacity duration-700 ${index === active ? "opacity-100" : "opacity-0"}`}>
      <Image src={slide.src} alt={index === active ? slide.alt : ""} fill preload={index === 0} loading={index === 0 ? undefined : "eager"} sizes="(min-width:1024px) 520px,90vw" className="object-cover object-center" />
    </div>)}
    <div className="absolute right-3 top-3 z-20 flex items-center gap-1 rounded-xl border border-white/20 bg-background/85 p-1 text-white backdrop-blur-sm">
      <button type="button" aria-label="Previous hero image" onClick={() => change(-1)} className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-white/10"><ChevronLeft className="h-4 w-4" /></button>
      <button type="button" aria-label={reducedMotion ? "Hero autoplay off: reduced motion" : paused ? "Resume hero slideshow" : "Pause hero slideshow"} aria-pressed={paused} disabled={reducedMotion} onClick={() => setPaused(value => !value)} className="min-h-11 min-w-16 rounded-lg px-2 text-xs font-semibold hover:bg-white/10 disabled:opacity-70">{reducedMotion ? "Motion off" : paused ? "Resume" : "Pause"}</button>
      <button type="button" aria-label="Next hero image" onClick={() => change(1)} className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-white/10"><ChevronRight className="h-4 w-4" /></button>
    </div>
    <p className="sr-only" aria-live={paused || reducedMotion ? "polite" : "off"}>Image {active + 1} of {slides.length}: {slides[active].alt}</p>
  </div>;
}
