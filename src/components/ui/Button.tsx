import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-[#df7720] shadow-sm shadow-accent/20",
  secondary:
    "border border-white/30 text-white hover:bg-white/10",
  ghost:
    "text-brand underline underline-offset-4 hover:text-brand/80",
};

export function Button({
  children,
  href = "#",
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-[3rem] items-center justify-center rounded-full px-7 py-3 text-[0.9375rem] font-semibold transition duration-200 ease-out hover:-translate-y-px active:translate-y-0 active:scale-[0.98]",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}