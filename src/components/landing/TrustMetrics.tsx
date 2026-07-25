import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import {
  Monitor,
  Tv,
  Smartphone,
  Cloud,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    value: '50"',
    label: "Kích thước màn hình",
    highlight: false,
  },
  {
    icon: Tv,
    value: "4K UHD",
    label: "Độ phân giải siêu nét",
    highlight: true,
  },
  {
    icon: Smartphone,
    value: "Android 14",
    label: "Hệ điều hành hiện đại",
    highlight: false,
  },
  {
    icon: Cloud,
    value: "CMS Cloud",
    label: "Quản lý nội dung từ xa",
    highlight: true,
  },
  {
    icon: ShieldCheck,
    value: "12 tháng",
    label: "Bảo hành chính hãng",
    highlight: false,
  },
  {
    icon: CalendarCheck,
    value: "7 ngày",
    label: "Dùng thử theo chính sách",
    highlight: false,
  },
];

export function TrustMetrics() {
  return (
    <section className="pb-12 pt-12 md:pb-16 md:pt-16">
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-border bg-[#F8FAFC] p-6 shadow-sm sm:p-8 md:rounded-3xl md:p-10">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.label}
                    className={`group flex flex-col items-center rounded-xl border p-5 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6 ${
                      f.highlight
                        ? "border-transparent bg-navy text-white"
                        : "border-border bg-white"
                    }`}
                  >
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      className={`mb-4 ${
                        f.highlight ? "text-accent" : "text-brand"
                      }`}
                    />
                    <p
                      className={`text-2xl font-bold leading-tight tracking-tight sm:text-3xl ${
                        f.highlight ? "text-white" : "text-brand"
                      }`}
                    >
                      {f.value}
                    </p>
                    <p
                      className={`mt-2 text-xs leading-5 sm:text-sm sm:leading-6 ${
                        f.highlight ? "text-white/70" : "text-muted"
                      }`}
                    >
                      {f.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
