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
            title="Đồng hành từ nhu cầu đến vận hành."
            description="Quy trình gọn gàng, minh bạch và bài bản cho từng điểm triển khai."
            center
          />
        </Reveal>

        <div className="relative mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-5 hidden h-px bg-border lg:block" aria-hidden="true" />
          {deploymentSteps.map((s) => (
            <Reveal key={s.step} delay={s.step * 0.05}>
              <div className="relative h-full rounded-[1.25rem] border border-border bg-white p-5 sm:p-6 lg:bg-transparent lg:p-4 lg:text-center">
                <p className="relative mx-0 mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-sm font-black text-brand lg:mx-auto">
                  {s.step}
                </p>
                <h3 className="text-base font-bold leading-6 text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
