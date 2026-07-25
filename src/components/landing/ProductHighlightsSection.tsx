import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { specs } from "@/content/landing.vi";

export function ProductHighlightsSection() {
  // Highlight first 6 key specs, rest in a denser grid
  const highlights = specs.slice(0, 6);
  const details = specs.slice(6);

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

        {/* Key specs */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="h-full rounded-[1.25rem] border border-border bg-white p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  {s.label}
                </p>
                <p className="mt-3 text-2xl font-bold tracking-tight text-ink">
                  {s.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">{s.benefit}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Remaining specs as dense list */}
        {details.length > 0 && (
          <Reveal>
            <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-border bg-white">
              <div className="grid divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
                {details.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-start justify-between gap-4 px-7 py-5"
                  >
                    <div>
                      <p className="text-sm font-semibold text-ink">{s.label}</p>
                      <p className="mt-1 text-xs leading-5 text-muted">
                        {s.benefit}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm font-bold text-brand">
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
