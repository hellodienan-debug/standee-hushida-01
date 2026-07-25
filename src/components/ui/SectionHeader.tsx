import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
  center = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center", light && "text-white")}>
      <p
        className={cn(
          "mb-5 text-xs font-bold uppercase tracking-[0.2em]",
          light ? "text-orange-300" : "text-accent",
        )}
      >
        {eyebrow}
      </p>
      <h2 className="h2 text-balance font-semibold">{title}</h2>
      {description && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-lg leading-8",
            center && "mx-auto",
            light ? "text-white/70" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}