"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/constants";

export function MobileStickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      const formSection =
        document.getElementById("dang-ky-demo") ??
        document.getElementById("lead-form");
      const footerSection = document.querySelector("footer");
      if (!formSection) return;

      const formRect = formSection.getBoundingClientRect();
      const footerRect = footerSection?.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Ẩn khi form hoặc footer nằm trong viewport
      const formVisible =
        formRect.top < windowHeight * 0.6 && formRect.bottom > 0;
      const footerVisible =
        footerRect &&
        footerRect.top < windowHeight * 0.6 &&
        footerRect.bottom > 0;

      setShow(!formVisible && !footerVisible);
    };

    handleVisibility();
    window.addEventListener("scroll", handleVisibility, { passive: true });
    window.addEventListener("resize", handleVisibility);
    return () => {
      window.removeEventListener("scroll", handleVisibility);
      window.removeEventListener("resize", handleVisibility);
    };
  }, []);

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-border bg-white/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden"
      style={{
        display: show ? "flex" : "none",
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
      }}
      role="region"
      aria-label="Hành động nhanh"
    >
      <a
        href={SITE.phoneHref}
        aria-label="Gọi tư vấn SHT"
        className="flex-1 rounded-full border border-brand py-3 text-center text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
      >
        Gọi tư vấn
      </a>
      <a
        href="#dang-ky-demo"
        className="flex-1 rounded-full bg-accent py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#df7720]"
      >
        Đăng ký demo
      </a>
    </div>
  );
}