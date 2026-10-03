"use client";

import useReducedMotion from "@/hooks/useReducedMotion";
import { useState } from "react";
import { MonitorPlay, Smartphone, Tablet, Laptop, Tv, HardDrive } from "lucide-react";

const devices = [
  { name: "Smart TV", icon: Tv },
  { name: "Fire Stick", icon: HardDrive },
  { name: "Android TV", icon: MonitorPlay },
  { name: "iPhone / iPad", icon: Smartphone },
  { name: "Windows", icon: Laptop },
  { name: "Mac", icon: Laptop },
  { name: "MAG Box", icon: MonitorPlay },
  { name: "Tablet", icon: Tablet },
];

export default function DeviceMarquee() {
  const [paused,setPaused] = useState(false);
  const reducedMotion=useReducedMotion();
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/20 py-5" aria-label="Supported devices">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex w-max category-marquee" style={{animationPlayState:paused ? "paused" : "running"}}>
        {[...devices, ...devices].map((device, i) => {
          const Icon = device.icon;
          return (
            <div
              key={`${device.name}-${i}`}
              aria-hidden={i >= devices.length ? true : undefined}
              className="flex shrink-0 items-center gap-2.5 px-6 py-2 rounded-full border border-border bg-card/40 mx-1.5 transition-all duration-300 hover:border-accent/30 hover:bg-accent/[0.04]"
            >
              <Icon className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                {device.name}
              </span>
            </div>
          );
        })}
      </div>
      <button type="button" aria-pressed={paused} disabled={reducedMotion} onClick={()=>setPaused(!paused)} className="mx-auto mt-4 block min-h-11 rounded-full border border-border px-4 text-xs text-muted-foreground">{reducedMotion ? "Device motion off: reduced motion" : paused ? "Resume device strip" : "Pause device strip"}</button>
    </section>
  );
}
