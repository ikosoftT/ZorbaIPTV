import { Tv, Film, MonitorPlay, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
export default function StatsBar() {
 return <section aria-label="Service overview" className="border-y border-border bg-card/30 py-8"><div className="container mx-auto grid grid-cols-2 gap-6 px-5 lg:grid-cols-4">{[{icon:Tv,value:siteConfig.stats.channels,label:"Live channel catalogue"},{icon:Film,value:siteConfig.stats.vod,label:"VOD catalogue"},{icon:MonitorPlay,value:"HD · FHD · 4K",label:"Where available"},{icon:MessageCircle,value:"WhatsApp",label:"Ordering & setup support"}].map(item => <div key={item.label} className="text-center"><item.icon className="mx-auto mb-3 h-5 w-5 text-accent" /><p className="text-xl font-bold sm:text-2xl">{item.value}</p><p className="mt-2 text-xs text-muted-foreground sm:text-sm">{item.label}</p></div>)}</div></section>;
}
