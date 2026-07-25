import { announcement } from "@/content/landing.vi";

export function AnnouncementBar() {
  return (
    <div className="bg-accent-dark px-4 py-2 text-center text-[12px] font-medium tracking-wide text-white">
      <span>{announcement.label}</span>
      <a
        href={announcement.href}
        className="ml-3 inline-block font-semibold text-white underline-offset-4 hover:underline"
      >
        {announcement.cta} →
      </a>
    </div>
  );
}