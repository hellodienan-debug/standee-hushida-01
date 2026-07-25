import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Placeholder } from "@/components/ui/Placeholder";
import { hero } from "@/content/landing.vi";
import { Shield, Truck, Headphones } from "lucide-react";

const trustIcons = [Shield, Truck, Headphones];

export function HeroSection() {
  return (
    <section
      id="top"
      className="bg-navy flex min-h-[calc(100dvh-125px)] items-center overflow-hidden py-8 text-white"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:gap-10 lg:items-center">
          <Reveal>
            <div>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {hero.eyebrow}
              </p>
              <h1 className="max-w-[22ch] text-[clamp(2.25rem,3.1vw,3rem)] font-bold leading-[1.02] tracking-[-0.045em] text-balance sm:max-w-[22ch]">
                {hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl md:leading-9">
                {hero.description}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="secondary">
                  {hero.secondaryCta.label}
                </Button>
              </div>

              {/* Trust points */}
              <ul className="mt-10 flex flex-col gap-3 text-sm text-white/60 sm:flex-row sm:justify-between">
                {hero.trustPoints.map((point, i) => {
                  const Icon = trustIcons[i];
                  return (
                    <li key={point} className="flex flex-1 items-center gap-2">
                      {Icon && <Icon size={16} className="text-accent" aria-hidden />}
                      {point}
                    </li>
                  );
                })}
              </ul>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {hero.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/50"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {hero.microcopy && (
                <p className="mt-4 text-xs text-white/40">
                  {hero.microcopy}
                </p>
              )}
            </div>
          </Reveal>

          <Reveal className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-[min(60dvh,480px)] px-2 sm:px-0">
              <Placeholder
                label="Hình ảnh minh họa Hushida 50 inch"
                className="aspect-[4/5]"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
