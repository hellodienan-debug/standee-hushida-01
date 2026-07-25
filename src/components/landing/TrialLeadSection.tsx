"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { trackEvent } from "@/lib/analytics";
import { trial, leadForm } from "@/content/landing.vi";
import { Check } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

type Fields = {
  name: string;
  phone: string;
  company: string;
  quantity: string;
  consent: boolean;
  website: string;
};

const initial: Fields = {
  name: "",
  phone: "",
  company: "",
  quantity: "",
  consent: false,
  website: "",
};

export function TrialLeadSection() {
  const [state, setState] = useState<FormState>("idle");
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});

  function validate(): boolean {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) e.name = leadForm.errors.name;
    if (!/^(0|\+84)(3|5|7|8|9)[0-9]{8}$/.test(fields.phone.trim()))
      e.phone = leadForm.errors.phone;
    if (!fields.company.trim()) e.company = leadForm.errors.company;
    if (!fields.consent) e.consent = leadForm.errors.consent;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (fields.website) return;
    if (!validate()) return;
    setState("loading");
    trackEvent("lead_submit", { need: "demo" });
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, need: "demo", region: "", notes: "" }),
      });
      if (!res.ok) throw new Error();
      setState("success");
    } catch {
      setState("error");
    }
  }

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  const input =
    "w-full rounded-2xl border border-border bg-white px-5 py-4 text-sm text-ink transition placeholder:text-muted-light focus:border-brand focus:outline-none";
  const errorBorder = "border-red-400 focus:border-red-500";

  return (
    <section id="dang-ky-demo" className="section-pad">
      <Container>
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          {/* Left: content */}
          <Reveal>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent sm:mb-5">
                Dùng thử 7 ngày
              </p>
              <h2 className="h2 text-balance font-semibold">{trial.headline}</h2>
              <p className="mt-4 text-base leading-7 text-muted sm:mt-5 sm:text-lg sm:leading-8">
                {trial.description}
              </p>

              <ul className="mt-6 space-y-3 sm:mt-8">
                {trial.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden
                    />
                    <span className="text-sm leading-6 text-ink">{p}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs text-muted">{trial.note}</p>
            </div>
          </Reveal>

          {/* Right: compact form */}
          <Reveal delay={0.1}>
            {state === "success" ? (
              <div
                className="rounded-[1.5rem] border border-border bg-white p-6 text-center sm:p-10"
                role="status"
                aria-live="polite"
              >
                <p className="text-base font-bold text-ink sm:text-lg">
                  {leadForm.successMessage}
                </p>
              </div>
            ) : (
              <form
                id="lead-form"
                onSubmit={onSubmit}
                className="space-y-4 rounded-[1.5rem] border border-border bg-white p-5 sm:space-y-5 sm:p-8"
                noValidate
              >
                {state === "error" && (
                  <div role="alert" className="rounded-2xl bg-red-50 p-4 text-sm text-red-700">
                    {leadForm.errorMessage}
                  </div>
                )}

                {/* Honeypot */}
                <input
                  type="text"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="absolute left-[-9999px] opacity-0"
                  value={fields.website}
                  onChange={(e) => set("website", e.target.value)}
                  placeholder="Website"
                  autoComplete="off"
                />

                <label className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-ink">{leadForm.fields.name} *</span>
                  <input
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "err-name" : undefined}
                    className={`${input} ${errors.name ? errorBorder : ""}`}
                    placeholder={leadForm.placeholders.name}
                    value={fields.name}
                    onChange={(e) => set("name", e.target.value)}
                  />
                  {errors.name && (
                    <p id="err-name" className="text-xs text-red-600" role="alert">{errors.name}</p>
                  )}
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-ink">{leadForm.fields.phone} *</span>
                  <input
                    required
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "err-phone" : undefined}
                    className={`${input} ${errors.phone ? errorBorder : ""}`}
                    placeholder={leadForm.placeholders.phone}
                    value={fields.phone}
                    onChange={(e) => set("phone", e.target.value)}
                  />
                  {errors.phone && (
                    <p id="err-phone" className="text-xs text-red-600" role="alert">{errors.phone}</p>
                  )}
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-ink">{leadForm.fields.company} *</span>
                  <input
                    required
                    aria-required="true"
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? "err-company" : undefined}
                    className={`${input} ${errors.company ? errorBorder : ""}`}
                    placeholder={leadForm.placeholders.company}
                    value={fields.company}
                    onChange={(e) => set("company", e.target.value)}
                  />
                  {errors.company && (
                    <p id="err-company" className="text-xs text-red-600" role="alert">{errors.company}</p>
                  )}
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-ink">{leadForm.fields.quantity}</span>
                  <input
                    className={input}
                    placeholder={leadForm.placeholders.quantity}
                    value={fields.quantity}
                    onChange={(e) => set("quantity", e.target.value)}
                  />
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    aria-required="true"
                    checked={fields.consent}
                    onChange={(e) => set("consent", e.target.checked)}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--brand)]"
                  />
                  <span className="text-xs leading-5 text-muted">{leadForm.consentText}</span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-red-600" role="alert">{errors.consent}</p>
                )}

                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="w-full rounded-full bg-accent px-6 py-4 text-sm font-bold text-white transition hover:bg-amber-500 disabled:opacity-60"
                >
                  {state === "loading" ? leadForm.loadingLabel : leadForm.submitLabel}
                </button>

                <p className="text-center text-xs text-muted">{leadForm.consentText}</p>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
