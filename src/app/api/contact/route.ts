import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { COMPANY } from "@/lib/company-data";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const formSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string().min(2),
  message: z.string().min(10),
});

const rateLimit = new Map<string, { count: number; resetAt: number }>();

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60_000 });
  } else {
    if (entry.count >= 5) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }
    entry.count += 1;
    rateLimit.set(ip, entry);
  }

  const body = await req.json();
  const parsed = formSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  if (resend) {
    await resend.emails.send({
      from: "Yazici Otomasyon <onboarding@resend.dev>",
      to: [COMPANY.email.main],
      subject: `[Iletisim Formu] ${parsed.data.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#0a1628; color:#f0f4f9; padding:24px;">
          <h2 style="margin:0 0 16px;">Yeni İletişim Formu</h2>
          <p><b>Ad Soyad:</b> ${parsed.data.name}</p>
          <p><b>Firma:</b> ${parsed.data.company ?? "-"}</p>
          <p><b>E-posta:</b> ${parsed.data.email}</p>
          <p><b>Telefon:</b> ${parsed.data.phone}</p>
          <p><b>Urun/Hizmet:</b> ${parsed.data.service}</p>
          <p><b>Mesaj:</b><br/>${parsed.data.message}</p>
        </div>
      `,
    });
  }

  return NextResponse.json({ ok: true });
}
