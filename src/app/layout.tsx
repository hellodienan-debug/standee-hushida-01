import type {Metadata} from "next";
import {Manrope} from "next/font/google";
import "./globals.css";
import {seo} from "@/lib/seo";

const manrope=Manrope({subsets:["latin","vietnamese"],variable:"--font-vietnam",display:"swap"});

export const metadata:Metadata={
  title:seo.title,
  description:seo.description,
  metadataBase:new URL("https://www.standeehushida.com"),
  alternates:{canonical:"/"},
  openGraph:{title:seo.title,description:seo.description,type:"website",locale:"vi_VN",siteName:"SHT",url:"https://www.standeehushida.com",images:[{url:"/opengraph-image.png",width:1200,height:630,alt:seo.title}]},
  twitter:{card:"summary_large_image",title:seo.title,description:seo.description,images:["/opengraph-image.png"]},
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="vi" className={manrope.variable}><body className="min-h-screen">{children}</body></html>}
