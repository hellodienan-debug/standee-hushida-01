import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { comparison } from "@/content/landing.vi";

export function ComparisonSection() {
  return (
    <section className="section-pad bg-surface">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="So sánh"
            title={comparison.headline}
            center
          />
        </Reveal>

        {/* Summary cards */}
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[1.5rem] border border-border bg-white p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
                Poster in ấn
              </p>
              <p className="mt-4 text-2xl font-bold text-ink">Tĩnh — một lần</p>
              <p className="mt-3 text-sm leading-6 text-muted">
                Phù hợp cho thông điệp ngắn hạn nhưng khó mở rộng và đồng bộ.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[1.5rem] border border-brand bg-brand p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-200">
                Hushida Digital Signage
              </p>
              <p className="mt-4 text-2xl font-bold">Động — linh hoạt</p>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Tạo giá trị dài hạn với tài sản truyền thông có thể tái sử dụng.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Comparison table */}
        <Reveal>
          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-border bg-white">
            {/* Desktop header */}
            <div className="hidden grid-cols-3 bg-brand-light px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-brand md:grid">
              <p>Tiêu chí</p>
              <p>Poster</p>
              <p>Digital Signage</p>
            </div>

            {/* Mobile: stacked cards */}
            <div className="divide-y divide-border md:hidden">
              {comparison.rows.map((r) => (
                <div key={r.criterion} className="space-y-2 p-5">
                  <p className="text-sm font-bold text-ink">{r.criterion}</p>
                  <p className="text-xs text-muted">Poster: {r.poster}</p>
                  <p className="text-xs font-medium text-brand">
                    Digital: {r.digital}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop: table rows */}
            <div className="hidden divide-y divide-border md:block">
              {comparison.rows.map((r) => (
                <div
                  key={r.criterion}
                  className="grid grid-cols-3 px-6 py-5 text-sm"
                >
                  <p className="font-semibold text-ink">{r.criterion}</p>
                  <p className="text-muted">{r.poster}</p>
                  <p className="font-medium text-brand">{r.digital}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
