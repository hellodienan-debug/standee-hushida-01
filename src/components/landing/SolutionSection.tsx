import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { solution } from "@/content/landing.vi";
import { Check } from "lucide-react";

export function SolutionSection() {
  return (
    <section className="section-pad">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Giải pháp"
            title={solution.headline}
            description={solution.description}
            center
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {solution.steps.map((s) => (
            <Reveal key={s.step} delay={s.step * 0.05}>
              <div className="h-full rounded-[1.25rem] border border-border bg-surface p-7">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-accent">
                  Bước {s.step}
                </p>
                <h3 className="text-lg font-semibold leading-7 text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {solution.benefits.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 text-sm font-medium text-muted"
              >
                <Check size={16} className="text-accent" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
