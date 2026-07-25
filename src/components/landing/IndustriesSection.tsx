import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { industries } from "@/content/landing.vi";
import {
  Landmark,
  Car,
  ShoppingBag,
  HeartPulse,
  Hotel,
  GraduationCap,
  Building,
  Home,
} from "lucide-react";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  bank: Landmark,
  car: Car,
  "shopping-bag": ShoppingBag,
  "heart-pulse": HeartPulse,
  hotel: Hotel,
  "graduation-cap": GraduationCap,
  building: Building,
  home: Home,
};

const industryImages: Record<string, { src: string; alt: string }> = {
  bank: {
    src: "/images/industries/bank.svg",
    alt: "Màn hình Digital Signage tại sảnh giao dịch",
  },
  car: {
    src: "/images/industries/showroom.svg",
    alt: "Màn hình Digital Signage tại showroom",
  },
  "shopping-bag": {
    src: "/images/industries/retail.svg",
    alt: "Màn hình Digital Signage tại cửa hàng bán lẻ",
  },
  "heart-pulse": {
    src: "/images/industries/healthcare.svg",
    alt: "Màn hình Digital Signage tại khu vực tiếp đón",
  },
  hotel: {
    src: "/images/industries/hotel.svg",
    alt: "Màn hình Digital Signage trong không gian khách sạn",
  },
  "graduation-cap": {
    src: "/images/industries/education.svg",
    alt: "Màn hình Digital Signage trong môi trường giáo dục",
  },
  building: {
    src: "/images/industries/office.svg",
    alt: "Màn hình Digital Signage tại văn phòng",
  },
  home: {
    src: "/images/industries/realestate.svg",
    alt: "Màn hình Digital Signage tại không gian bất động sản",
  },
};

export function IndustriesSection() {
  return (
    <section id="industries" className="section-pad">
      <Container>
        <SectionHeader
          eyebrow="Ứng dụng đa ngành"
          title="Giải pháp phù hợp với nhiều ngành nghề."
          description="Mỗi ngành có nhu cầu truyền thông riêng. Digital Signage giúp đồng bộ nội dung tại mọi điểm kinh doanh."
          center
        />

        <Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => {
              const Icon = iconMap[ind.icon];
              const image = industryImages[ind.icon];
              return (
                <article
                  key={ind.name}
                  className="group overflow-hidden rounded-[1.25rem] border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/5"
                >
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
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      {Icon && <Icon size={22} aria-hidden />}
                    </div>
                    <h3 className="text-lg font-semibold text-ink">{ind.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {ind.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
