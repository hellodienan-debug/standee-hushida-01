import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { businessBenefits } from "@/content/landing.vi";
import { Sparkles, Settings, Heart } from "lucide-react";

const groupIcons = [Sparkles, Settings, Heart];

export function BusinessBenefitsSection() {
  return (
    <section className="section-pad">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Lợi ích kinh doanh"
            title={businessBenefits.headline}
            description={businessBenefits.description}
            center
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {businessBenefits.groups.map((g, i) => {
            const Icon = groupIcons[i];
            return (
              <Reveal key={g.title} delay={i * 0.08}>
                <div className="h-full rounded-[1.5rem] border border-border bg-white p-10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-brand">
                    {Icon && <Icon size={22} aria-hidden />}
                  </div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand">
                    {g.title}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                    {g.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
