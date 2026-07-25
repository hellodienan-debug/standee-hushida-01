import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot — silently accept bots without storing
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Validation failed",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    // Mock mode — log lead without PII in production logs
    if (process.env.NODE_ENV === "development") {
      console.log("[leads] received (mock mode):", {
        need: parsed.data.need,
        company: parsed.data.company,
        region: parsed.data.region,
      });
    }

    // TODO: Forward to CRM / email service when endpoint is confirmed
    return NextResponse.json({
      ok: true,
      message: "Đã nhận thông tin.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid payload" },
      { status: 400 },
    );
  }
}
