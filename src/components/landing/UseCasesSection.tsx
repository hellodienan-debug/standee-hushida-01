import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { useCases } from "@/content/landing.vi";
import {
  DoorOpen,
  Store,
  Car,
  ShoppingBag,
  Armchair,
  PartyPopper,
  Presentation,
  Megaphone,
} from "lucide-react";

const useCaseIcons = [
  DoorOpen,
  Store,
  Car,
  ShoppingBag,
  Armchair,
  PartyPopper,
  Presentation,
  Megaphone,
];

const useCaseImages = [
  {
    src: "/images/gallery/standee-lobby.webp",
    alt: "Màn hình Digital Signage tại khu vực lễ tân",
  },
  {
    src: "/images/gallery/standee-office.webp",
    alt: "Màn hình Digital Signage tại sảnh giao dịch",
  },
  {
    src: "/images/gallery/standee-showroom.webp",
    alt: "Màn hình Digital Signage trong showroom",
  },
  {
    src: "/images/gallery/standee-retail.webp",
    alt: "Màn hình Digital Signage tại điểm bán",
  },
  {
    src: "/images/gallery/standee-hospitality.webp",
    alt: "Màn hình Digital Signage tại phòng chờ",
  },
  {
    src: "/images/gallery/standee-meeting.webp",
    alt: "Màn hình Digital Signage tại sự kiện",
  },
  {
    src: "/images/gallery/standee-meeting.webp",
    alt: "Màn hình Digital Signage trong hội nghị",
  },
  {
    src: "/images/gallery/standee-office.webp",
    alt: "Màn hình Digital Signage cho truyền thông nội bộ",
  },
];

export function UseCasesSection() {
  return (
    <section className="section-pad bg-surface">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Kịch bản sử dụng"
            title="Những khu vực triển khai phổ biến."
            description="Hushida 50 inch đặt vừa vặn ở nhiều không gian kinh doanh khác nhau."
            center
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((c, i) => {
            const Icon = useCaseIcons[i];
            const image = useCaseImages[i];
            return (
              <Reveal key={c.title} delay={i * 0.04}>
                <article className="group h-full overflow-hidden rounded-[1.25rem] border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/5">
                  <div className="relative h-44 overflow-hidden bg-brand-light">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-navy/15"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="p-7">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-light text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      {Icon && <Icon size={20} aria-hidden />}
                    </div>
                    <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {c.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
