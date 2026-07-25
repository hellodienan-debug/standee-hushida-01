import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { trial } from "@/content/landing.vi";
import { Check } from "lucide-react";

export function TrialSection() {
  return (
    <section className="section-pad bg-surface">
      <Container>
        <Reveal>
          <div className="rounded-[1.75rem] bg-navy p-10 text-center text-white md:p-16">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Dùng thử 7 ngày
            </p>
            <h2 className="h2 text-balance font-semibold">{trial.headline}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/70">
              {trial.description}
            </p>

            <ul className="mx-auto mt-8 grid max-w-lg gap-3 text-left text-sm text-white/70 sm:grid-cols-2">
              {trial.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-accent"
                    aria-hidden
                  />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={trial.primaryCta.href}>{trial.primaryCta.label}</Button>
              <Button href={trial.secondaryCta.href} variant="secondary">
                {trial.secondaryCta.label}
              </Button>
            </div>

            <p className="mt-6 text-xs text-white/40">{trial.note}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
