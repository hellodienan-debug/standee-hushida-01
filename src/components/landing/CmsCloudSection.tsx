import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { solution } from "@/content/landing.vi";
import {
  Monitor,
  CloudUpload,
  LayoutGrid,
  WifiOff,
} from "lucide-react";

const benefitIcons = [Monitor, CloudUpload, LayoutGrid, WifiOff];

export function CmsCloudSection() {
  return (
    <section id="cms" className="bg-navy section-pad text-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            CMS Cloud
          </p>
          <h2 className="h2 text-balance font-semibold">{solution.headline}</h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            {solution.description}
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          {/* Left: CMS mockup */}
          <Reveal>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-navy-deep p-7 shadow-2xl">
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

          {/* Right: workflow + 4 benefits */}
          <Reveal delay={0.1}>
            <div>
              <div className="rounded-2xl border border-white/10 bg-navy-deep p-6">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Quy trình
                </p>
                <ol className="space-y-4">
                  {solution.steps.map((s, i) => (
                    <li key={s.step} className="flex items-start gap-4">
                      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-xs font-bold text-white">
                        {s.step}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {s.title}
                        </p>
                        <p className="mt-1 text-xs leading-6 text-white/60">
                          {s.description}
                        </p>
                      </div>
                      {i < solution.steps.length - 1 && (
                        <span className="sr-only">đến bước {s.step + 1}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {solution.benefits.map((b, i) => {
                  const Icon = benefitIcons[i];
                  return (
                    <div
                      key={b.title}
                      className={`rounded-xl border p-4 sm:p-5 ${
                        i === 0
                          ? "border-accent/40 bg-accent/10"
                          : "border-white/10 bg-navy-deep"
                      }`}
                    >
                      {Icon && (
                        <Icon
                          size={20}
                          className={`mb-2 sm:mb-3 ${i === 0 ? "text-accent" : "text-accent/80"}`}
                          aria-hidden
                        />
                      )}
                      <p className="text-xs font-semibold text-white sm:text-sm">
                        {b.title}
                      </p>
                      <p className="mt-1.5 text-[11px] leading-5 text-white/55 sm:text-xs sm:leading-6">
                        {b.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
