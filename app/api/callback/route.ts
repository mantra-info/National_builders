import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, phone, bhk } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "National Royal Palace <onboarding@resend.dev>",
    to: ["marketingkochi@nationalbuilders.in"],
    subject: `New Callback Request — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:520px;margin:auto;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden">
        <div style="background:#1C1428;padding:24px 32px">
          <h2 style="margin:0;color:#fff;font-size:1.2rem">New Callback Request</h2>
          <p style="margin:4px 0 0;color:rgba(255,255,255,0.6);font-size:0.85rem">National Royal Palace — Landing Page</p>
        </div>
        <div style="padding:28px 32px;background:#fff">
          <table style="width:100%;border-collapse:collapse;font-size:0.95rem">
            <tr><td style="padding:10px 0;color:#6b7280;width:120px">Name</td><td style="padding:10px 0;font-weight:600;color:#111">${name}</td></tr>
            <tr style="border-top:1px solid #f3f4f6"><td style="padding:10px 0;color:#6b7280">Phone</td><td style="padding:10px 0;font-weight:600;color:#111">${phone}</td></tr>
            <tr style="border-top:1px solid #f3f4f6"><td style="padding:10px 0;color:#6b7280">Preferred BHK</td><td style="padding:10px 0;font-weight:600;color:#111">${bhk || "Not specified"}</td></tr>
          </table>
          <a href="tel:${phone.replace(/\s/g, "")}" style="display:inline-block;margin-top:20px;padding:10px 24px;background:#1C1428;color:#fff;border-radius:6px;text-decoration:none;font-weight:600;font-size:0.9rem">
            Call Back Now
          </a>
        </div>
        <div style="padding:14px 32px;background:#f9fafb;font-size:0.78rem;color:#9ca3af">
          Submitted from nationalroyalpalace.com
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
