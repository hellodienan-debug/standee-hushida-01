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
            title="Bạn có thắc mắc gì?"
            description="Tổng hợp các câu hỏi phổ biến về Hushida Digital Signage và dịch vụ SHT."
            center
          />
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl">
          <Accordion items={faqs} />
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          Không tìm thấy câu trả lời?{" "}
          <a href="#lead-form" className="font-semibold text-brand underline underline-offset-2 hover:text-brand/80">
            Liên hệ SHT
          </a>{" "}
          để được tư vấn trực tiếp.
        </p>
      </Container>
    </section>
  );
}
