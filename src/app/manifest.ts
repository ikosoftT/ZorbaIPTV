import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest { return { name:"Zorba IPTV",short_name:"Zorba IPTV",description:"Live TV, sports and entertainment with device setup support",start_url:"/",display:"standalone",background_color:"#090B18",theme_color:"#090B18",icons:[{src:"/icon.png",sizes:"256x256",type:"image/png"}] }; }
