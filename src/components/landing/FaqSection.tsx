"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/content/landing.vi";

export function FaqSection() {
  return (
    <section id="faq" className="section-pad">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Câu hỏi thường gặp"
            title="Giải đáp những điều doanh nghiệp quan tâm."
            description="Thông tin ngắn gọn về CMS Cloud, thiết bị và chương trình trải nghiệm Hushida."
            center
          />
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion items={faqs} />
        </div>

        <p className="mt-6 text-center text-xs text-muted">
          Cần tư vấn thêm?{" "}
          <a href="#dang-ky-demo" className="font-semibold text-brand underline underline-offset-2 hover:text-brand/80">
            Đăng ký demo miễn phí
          </a>
        </p>
      </Container>
    </section>
  );
}
