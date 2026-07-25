import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Placeholder } from "@/components/ui/Placeholder";
import { caseStudies } from "@/content/landing.vi";

export function CaseStudiesSection() {
  return (
    <section id="proof" className="section-pad">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Kịch bản tham khảo"
            title="Cùng hình dung cách nội dung số tạo giá trị."
            description="Đây là những kịch bản minh hoạ, chưa phải dự án đã triển khai. Sẽ được thay bằng case study đã xác nhận khi có."
            center
          />
        </Reveal>

        <div className="mt-8 flex justify-center">
          <span className="inline-block rounded-full bg-accent-soft px-4 py-2 text-xs font-semibold text-[#df7720]">
            Kịch bản tham khảo — chưa phải dự án thực tế
          </span>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.industry} delay={i * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-white">
                <Placeholder
                  className="aspect-[16/10] rounded-none rounded-t-[1.5rem]"
                  label="Hình ảnh sẽ được cập nhật"
                />
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent">
                    {cs.industry}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {cs.context}
                  </p>

                  <dl className="mt-5 space-y-3 text-sm">
                    <div>
                      <dt className="font-semibold text-ink">Nhu cầu</dt>
                      <dd className="mt-1 text-muted">{cs.need}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">Giải pháp</dt>
                      <dd className="mt-1 text-muted">{cs.solution}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">Giá trị</dt>
                      <dd className="mt-1 text-muted">{cs.value}</dd>
                    </div>
                  </dl>

                  <p className="mt-auto pt-5 text-xs italic text-muted-light">
                    {cs.disclaimer}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
