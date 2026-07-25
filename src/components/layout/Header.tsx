"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/landing.vi";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className="sticky top-0 z-40 border-b border-white/10 bg-navy transition-all duration-300"
    >
      <div className="container-shell flex h-[44px] items-center justify-between gap-4">
        <Link
          href="#top"
          onClick={close}
          className="flex items-center gap-2.5 text-lg font-black leading-none tracking-tight text-white"
          aria-label={`${SITE.name} — Trang chủ`}
        >
          <span className="grid h-[35px] w-[35px] shrink-0 place-items-center rounded-md bg-white text-sm leading-none text-accent font-black">
            SHT
          </span>
          <span className="hidden leading-none sm:inline">{SITE.name}</span>
        </Link>

        <nav
          className="hidden items-center gap-7 text-[13px] font-bold text-white md:flex"
          aria-label="Điều hướng chính"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#F59E0B]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#lead-form"
            className="rounded-full bg-accent px-5 py-2 text-[13px] font-bold text-white transition-colors hover:bg-accent-dark"
          >
            Đăng ký demo
          </a>
        </nav>

        <button
          ref={triggerRef}
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/20 text-white md:hidden"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-white/10 bg-navy md:hidden"
      >
        <nav
          className="container-shell flex flex-col gap-5 py-6 text-sm font-bold text-white"
          aria-label="Điều hướng di động"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="py-1 transition-colors hover:text-[#F59E0B]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#lead-form"
            onClick={close}
            className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-accent-dark"
          >
            Đăng ký demo
          </a>
        </nav>
      </div>
    </header>
  );
}