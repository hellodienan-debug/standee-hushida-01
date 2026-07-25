import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { cmsCloud } from "@/content/landing.vi";
import {
  Monitor,
  CloudUpload,
  Image,
  LayoutGrid,
  WifiOff,
  Languages,
  BadgeCheck,
} from "lucide-react";

const featureIcons = [
  Monitor,
  CloudUpload,
  Image,
  LayoutGrid,
  WifiOff,
  Languages,
  BadgeCheck,
];

export function CmsCloudSection() {
  return (
    <section id="cms" className="bg-navy section-pad text-white">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <SectionHeader
              light
              eyebrow="CMS Cloud"
              title={cmsCloud.headline}
              description={cmsCloud.description}
            />
          </Reveal>

          <Reveal delay={0.1}>
            {/* Decorative CMS mockup */}
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-navy-deep p-8 shadow-2xl">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-white/30" />
                <span className="h-3 w-3 rounded-full bg-white/30" />
                <span className="h-3 w-3 rounded-full bg-white/30" />
                <span className="ml-4 text-xs text-white/40">CMS Cloud Dashboard</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 space-y-3">
                  <div className="h-3 w-2/3 rounded bg-white/10" />
                  <div className="h-3 w-1/2 rounded bg-white/10" />
                  <div className="grid grid-cols-3 gap-3 pt-4">
                    <div className="h-24 rounded-xl bg-white/5" />
                    <div className="h-24 rounded-xl bg-accent/30" />
                    <div className="h-24 rounded-xl bg-white/5" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
                    Lịch phát
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
                    Thiết bị
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
                    Nội dung
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cmsCloud.features.map((f, i) => {
            const Icon = featureIcons[i];
            return (
              <Reveal key={f.title} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-white/10 bg-navy-deep p-6">
                  {Icon && (
                    <Icon size={20} className="mb-3 text-accent" aria-hidden />
                  )}
                  <p className="text-sm font-semibold text-white">{f.title}</p>
                  <p className="mt-2 text-xs leading-6 text-white/55">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
