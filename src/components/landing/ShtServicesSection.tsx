import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/content/landing.vi";

export function ShtServicesSection() {
  return (
    <section className="section-pad">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Dịch vụ SHT"
            title="Đồng hành từ khảo sát đến vận hành."
            description="SHT hỗ trợ doanh nghiệp xuyên suốt quá trình triển khai và sau bán hàng."
            center
          />
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl border-l-2 border-brand-light pl-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="relative py-5">
                <span className="absolute -left-[1.85rem] top-5 h-3 w-3 rounded-full border-2 border-brand bg-white" />
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand">
                  Dịch vụ {i + 1}
                </p>
                <p className="mt-1 text-lg font-bold text-ink">{s.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
