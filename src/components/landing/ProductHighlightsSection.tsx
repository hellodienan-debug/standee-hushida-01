"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { specs } from "@/content/landing.vi";
import { ChevronDown } from "lucide-react";

const highlightLabels = [
  "Kích thước",
  "Độ phân giải",
  "Hệ điều hành",
  "RAM / Bộ nhớ trong",
  "Wi-Fi",
  "Quản lý nội dung",
];

export function ProductHighlightsSection() {
  const [expanded, setExpanded] = useState(false);
  const highlights = [
    specs.find((s) => s.label === "Kích thước"),
    specs.find((s) => s.label === "Độ phân giải"),
    specs.find((s) => s.label === "Hệ điều hành"),
    {
      label: "RAM / Bộ nhớ trong",
      value: "4GB / 32GB",
      benefit: "Vận hành ổn định và lưu trữ nhiều bộ nội dung.",
    },
    specs.find((s) => s.label === "Wi-Fi"),
    specs.find((s) => s.label === "Quản lý nội dung"),
  ].filter((spec): spec is { label: string; value: string; benefit: string } => Boolean(spec));
  const highlightSet = new Set(highlightLabels);
  const details = specs.filter((s) => !highlightSet.has(s.label));

  return (
    <section id="product" className="section-pad">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Thông số nổi bật"
            title="Hushida 50 inch — thiết kế cho vận hành."
            description="Tập trung vào những thông số quyết định trải nghiệm thực tế tại điểm kinh doanh."
            center
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {highlights.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.04}>
              <div className="h-full rounded-[1.25rem] border border-border bg-white p-4 sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent sm:text-xs sm:tracking-[0.16em]">
                  {s.label}
                </p>
                <p className="mt-2 text-base font-bold tracking-tight text-ink sm:mt-3 sm:text-xl">
                  {s.value}
                </p>
                <p className="mt-1.5 text-[11px] leading-4 text-muted sm:mt-2 sm:text-xs sm:leading-5">{s.benefit}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls="detailed-specifications"
            onClick={() => setExpanded((value) => !value)}
            className="mx-auto flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:border-brand hover:bg-brand-light"
          >
            {expanded ? "Thu gọn cấu hình" : "Xem cấu hình chi tiết"}
            <ChevronDown
              size={16}
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
              aria-hidden
            />
          </button>

          <div
            id="detailed-specifications"
            hidden={!expanded}
            className="mx-auto mt-5 max-w-4xl overflow-hidden rounded-[1.25rem] border border-border bg-white"
          >
            <div className="grid divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
              {details.map((s) => (
                <div key={s.label} className="flex items-start justify-between gap-4 px-6 py-4">
                  <div>
                    <p className="text-sm font-semibold text-ink">{s.label}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{s.benefit}</p>
                  </div>
                  <p className="shrink-0 text-sm font-bold text-brand">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
