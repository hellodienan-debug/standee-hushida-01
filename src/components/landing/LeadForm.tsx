"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { trackEvent } from "@/lib/analytics";
import { leadForm } from "@/content/landing.vi";

type FormState = "idle" | "loading" | "success" | "error";

type Fields = {
  name: string;
  phone: string;
  company: string;
  region: string;
  need: string;
  quantity: string;
  notes: string;
  consent: boolean;
  website: string;
};

const initial: Fields = {
  name: "",
  phone: "",
  company: "",
  region: "",
  need: "",
  quantity: "",
  notes: "",
  consent: false,
  website: "",
};

export function LeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});

  function validate(): boolean {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) e.name = leadForm.errors.name;
    if (!/^(0|\+84)(3|5|7|8|9)[0-9]{8}$/.test(fields.phone.trim()))
      e.phone = leadForm.errors.phone;
    if (!fields.company.trim()) e.company = leadForm.errors.company;
    if (!fields.need) e.need = leadForm.errors.need;
    if (!fields.consent) e.consent = leadForm.errors.consent;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (fields.website) return; // honeypot
    if (!validate()) return;
    setState("loading");
    trackEvent("lead_submit", { need: fields.need });
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
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
    <section id="lead-form" className="section-pad">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Liên hệ"
            title={leadForm.headline}
            description={leadForm.description}
            center
          />
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          {state === "success" ? (
            <div
              className="rounded-[1.5rem] border border-border bg-white p-10 text-center"
              role="status"
              aria-live="polite"
            >
              <p className="text-lg font-bold text-ink">
                {leadForm.successMessage}
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="space-y-5 rounded-[1.5rem] border border-border bg-white p-8"
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

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-ink">
                    {leadForm.fields.name} *
                  </span>
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
                    <p id="err-name" className="text-xs text-red-600" role="alert">
                      {errors.name}
                    </p>
                  )}
                </label>

                {/* Phone */}
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-ink">
                    {leadForm.fields.phone} *
                  </span>
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
                    <p id="err-phone" className="text-xs text-red-600" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </label>

                {/* Company */}
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-ink">
                    {leadForm.fields.company} *
                  </span>
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
                    <p id="err-company" className="text-xs text-red-600" role="alert">
                      {errors.company}
                    </p>
                  )}
                </label>

                {/* Region */}
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-ink">
                    {leadForm.fields.region}
                  </span>
                  <input
                    className={input}
                    placeholder={leadForm.placeholders.region}
                    value={fields.region}
                    onChange={(e) => set("region", e.target.value)}
                  />
                </label>

                {/* Need */}
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-ink">
                    {leadForm.fields.need} *
                  </span>
                  <select
                    required
                    aria-required="true"
                    aria-invalid={!!errors.need}
                    className={`${input} ${errors.need ? errorBorder : ""}`}
                    value={fields.need}
                    onChange={(e) => set("need", e.target.value)}
                  >
                    <option value="">Chọn nhu cầu</option>
                    {leadForm.needs.map((n) => (
                      <option key={n.value} value={n.value}>
                        {n.label}
                      </option>
                    ))}
                  </select>
                  {errors.need && (
                    <p className="text-xs text-red-600" role="alert">
                      {errors.need}
                    </p>
                  )}
                </label>

                {/* Quantity */}
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-ink">
                    {leadForm.fields.quantity}
                  </span>
                  <input
                    className={input}
                    placeholder={leadForm.placeholders.quantity}
                    value={fields.quantity}
                    onChange={(e) => set("quantity", e.target.value)}
                  />
                </label>
              </div>

              {/* Notes */}
              <label className="flex flex-col gap-2">
                <span className="text-xs font-bold text-ink">
                  {leadForm.fields.note}
                </span>
                <textarea
                  rows={3}
                  className={input}
                  placeholder={leadForm.placeholders.note}
                  value={fields.notes}
                  onChange={(e) => set("notes", e.target.value)}
                />
              </label>

              {/* Consent */}
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  aria-required="true"
                  checked={fields.consent}
                  onChange={(e) => set("consent", e.target.checked)}
                  className="mt-1"
                />
                <span className="text-xs leading-5 text-muted">
                  {leadForm.consentText}
                </span>
              </label>
              {errors.consent && (
                <p className="text-xs text-red-600" role="alert">
                  {errors.consent}
                </p>
              )}

              <button
                type="submit"
                disabled={state === "loading"}
                className="w-full rounded-full bg-brand px-6 py-4 text-sm font-bold text-white transition hover:bg-[#062a45] disabled:opacity-60"
              >
                {state === "loading"
                  ? leadForm.loadingLabel
                  : leadForm.submitLabel}
              </button>
            </form>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
