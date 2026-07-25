import Link from "next/link";
import {
  ArrowUpRight,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { footer } from "@/content/landing.vi";
import { SITE } from "@/lib/constants";

const contactItems = [
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: SITE.address,
    href: "https://maps.google.com/?q=51/2+Thành+Thái,+Phường+Diên+Hồng,+TP.HCM",
  },
  {
    icon: Phone,
    label: "Điện thoại",
    value: SITE.phone,
    href: SITE.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: SITE.emailHref,
  },
  {
    icon: Globe,
    label: "Website",
    value: SITE.website,
    href: SITE.websiteHref,
  },
];

export function Footer() {
  return (
    <footer className="bg-[#101827] text-white">
      <div className="container-shell py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_1fr] lg:gap-16">
          <div>
            <Link
              href="#top"
              className="inline-flex items-center gap-3 text-xl font-bold tracking-tight"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-sm font-bold text-brand">
                SHT
              </span>
              <span>SHT Technology</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              {footer.description}
            </p>

            <div className="mt-8 border-l-2 border-accent pl-4">
              <p className="max-w-sm text-base font-semibold leading-6 text-white">
                {footer.cta.title}
              </p>
              <Link
                href={footer.cta.href}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {footer.cta.button}
                <ArrowUpRight size={16} aria-hidden />
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Truy cập nhanh
            </p>
            <ul className="mt-5 space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Liên hệ
            </p>
            <ul className="mt-5 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-start gap-3">
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden
                    />
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <a
                        href={item.href}
                        target={item.label === "Website" || item.label === "Địa chỉ" ? "_blank" : undefined}
                        rel={item.label === "Website" || item.label === "Địa chỉ" ? "noreferrer" : undefined}
                        className="break-words text-sm text-slate-200 transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-500">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
