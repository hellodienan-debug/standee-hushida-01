import type {Metadata} from "next";
import {Manrope} from "next/font/google";
import "./globals.css";
import {seo} from "@/lib/seo";

const manrope=Manrope({subsets:["latin","vietnamese"],variable:"--font-vietnam",display:"swap"});

export const metadata:Metadata={
  title:seo.title,
  description:seo.description,
  metadataBase:new URL("https://sht.vn"),
  alternates:{canonical:"/"},
  openGraph:{title:seo.title,description:seo.description,type:"website",locale:"vi_VN",siteName:"SHT"},
  twitter:{card:"summary_large_image",title:seo.title,description:seo.description},
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="vi" className={manrope.variable}><body className="min-h-screen">{children}</body></html>}
