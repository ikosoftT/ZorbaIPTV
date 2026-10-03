"use client";
import React, { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
type EmblaSliderProps={children:ReactNode;delay?:number;align?:"start"|"center"|"end";loop?:boolean};
export default function EmblaSlider({children,align="start",loop=true}:EmblaSliderProps){const [ref,api]=useEmblaCarousel({loop,align});return <div><div className="embla" ref={ref}><div className="embla__container">{React.Children.map(children,child=><div className="embla__slide">{child}</div>)}</div></div><div className="mt-5 flex justify-end gap-3"><button type="button" onClick={()=>api?.scrollPrev()} className="secondary-button">Previous</button><button type="button" onClick={()=>api?.scrollNext()} className="secondary-button">Next</button></div></div>}
