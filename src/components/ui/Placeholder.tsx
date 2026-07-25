import { cn } from "@/lib/utils";

type PlaceholderProps = {
  label?: string;
  className?: string;
  ratio?: string;
};

export function Placeholder({
  label = "Hình ảnh sẽ được cập nhật",
  className,
  ratio = "aspect-[16/9]",
}: PlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-brand-light via-surface to-[#d4e0e8] p-6 text-center",
        ratio,
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div>
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 font-black text-brand">
          SHT
        </div>
        <p className="text-xs font-medium text-brand/60">{label}</p>
      </div>
    </div>
  );
}