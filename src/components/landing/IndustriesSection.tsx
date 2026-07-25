import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { industries } from "@/content/landing.vi";
import {
  Landmark,
  Car,
  ShoppingBag,
  Building,
  Hotel,
  Home,
} from "lucide-react";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  bank: Landmark,
  car: Car,
  "shopping-bag": ShoppingBag,
  building: Building,
  hotel: Hotel,
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
  building: {
    src: "/images/industries/office.svg",
    alt: "Màn hình Digital Signage tại văn phòng",
  },
  hotel: {
    src: "/images/industries/hotel.svg",
    alt: "Màn hình Digital Signage trong không gian khách sạn",
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
          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {industries.map((ind) => {
              const Icon = iconMap[ind.icon];
              const image = industryImages[ind.icon];
              return (
                <article
                  key={ind.name}
                  className="group overflow-hidden rounded-[1.25rem] border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/5"
                >
                  <div className="relative h-40 overflow-hidden bg-brand-light sm:h-44">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy/15" aria-hidden="true" />
                  </div>
                  <div className="p-5 sm:p-7">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-light text-brand transition-colors group-hover:bg-brand group-hover:text-white sm:mb-4 sm:h-12 sm:w-12">
                      {Icon && <Icon size={22} aria-hidden />}
                    </div>
                    <h3 className="text-base font-semibold text-ink sm:text-lg">{ind.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {ind.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>

        <p className="mt-8 text-center text-sm text-muted sm:mt-10">
          Đồng thời phù hợp với y tế, giáo dục, nhà máy và các khu vực công cộng.
        </p>
      </Container>
    </section>
  );
}
