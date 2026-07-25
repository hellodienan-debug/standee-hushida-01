import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { deploymentSteps } from "@/content/landing.vi";

export function DeploymentProcessSection() {
  return (
    <section id="process" className="section-pad bg-surface">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Quy trình triển khai"
            title="8 bước để hiện thực hoá giải pháp."
            description="Từ đăng ký tư vấn đến hỗ trợ sau bán hàng — quy trình minh bạch và bài bản."
            center
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {deploymentSteps.map((s) => (
            <Reveal key={s.step} delay={s.step * 0.04}>
              <div className="h-full rounded-[1.25rem] border border-border bg-white p-8">
                <p className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-sm font-black text-brand">
                  {s.step}
                </p>
                <h3 className="text-base font-bold leading-7 text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
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
