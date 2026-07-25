import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { finalCta } from "@/content/landing.vi";
import { Phone } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="bg-navy section-pad text-center text-white">
      <Container>
        <Reveal>
          <p className="display mx-auto max-w-3xl font-bold text-balance">
            {finalCta.headline}
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/70">
            {finalCta.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={finalCta.primaryCta.href}>
              {finalCta.primaryCta.label}
            </Button>
            <Button href={finalCta.secondaryCta.href} variant="secondary">
              {finalCta.secondaryCta.label}
            </Button>
            <a
              href={finalCta.phoneCta.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              <Phone size={16} aria-hidden />
              {finalCta.phoneCta.label}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
