"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { deploymentGallery } from "@/content/landing.vi";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function DeploymentGallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : deploymentGallery.images[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? null
            : (current - 1 + deploymentGallery.images.length) % deploymentGallery.images.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % deploymentGallery.images.length,
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section id="proof" className="overflow-hidden bg-white py-10 md:py-16">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Dự án thực tế"
            title={deploymentGallery.headline}
            description={deploymentGallery.description}
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:mt-12 md:grid-cols-3 md:auto-rows-[13rem] lg:mt-14 lg:auto-rows-[15rem]">
          {deploymentGallery.images.map((image, index) => (
            <Reveal
              key={image.src}
              delay={index * 0.06}
              className={cn(
                "group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_12px_35px_rgba(7,27,43,0.12)] sm:aspect-auto sm:min-h-[12rem] md:min-h-0",
                image.span,
                "md:col-span-1",
              )}
            >
              <button
                type="button"
                className="relative block h-full w-full cursor-zoom-in text-left"
                onClick={() => setActiveIndex(index)}
                aria-label={`Mở ảnh: ${image.caption}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1279px) 33vw, 26vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-5 pb-4 pt-12 text-sm font-semibold text-white opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                  {image.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      {activeImage && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-navy/95 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh triển khai thực tế"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-5 top-5 rounded-full border border-white/20 p-2 text-white transition-colors hover:bg-white/10"
            aria-label="Đóng ảnh"
          >
            <X size={24} aria-hidden />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((activeIndex - 1 + deploymentGallery.images.length) % deploymentGallery.images.length);
            }}
            className="absolute left-3 top-1/2 rounded-full border border-white/20 p-2 text-white transition-colors hover:bg-white/10 sm:left-6"
            aria-label="Ảnh trước"
          >
            <ChevronLeft size={24} aria-hidden />
          </button>
          <div
            className="relative h-[78vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
            <p className="absolute inset-x-0 -bottom-8 text-center text-sm text-white/70">
              {activeImage.caption} · {activeIndex + 1}/{deploymentGallery.images.length}
            </p>
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((activeIndex + 1) % deploymentGallery.images.length);
            }}
            className="absolute right-3 top-1/2 rounded-full border border-white/20 p-2 text-white transition-colors hover:bg-white/10 sm:right-6"
            aria-label="Ảnh tiếp theo"
          >
            <ChevronRight size={24} aria-hidden />
          </button>
        </div>
      )}
    </section>
  );
}
