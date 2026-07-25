import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Placeholder } from "@/components/ui/Placeholder";
import { problem } from "@/content/landing.vi";
import { XCircle } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="section-pad bg-surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <SectionHeader
                eyebrow="Thực trạng"
                title={problem.headline}
                description={problem.description}
              />
              <ul className="mt-10 space-y-5">
                {problem.items.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <XCircle
                      size={20}
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden
                    />
                    <div>
                      <p className="font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Placeholder
              label="Hình ảnh minh họa vấn đề truyền thống"
              className="aspect-[4/3]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
