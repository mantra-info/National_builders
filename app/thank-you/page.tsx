import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You — National Royal Palace",
  description: "Your callback request has been received. Our team will contact you shortly.",
};

export default function ThankYouPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#1C1428", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
      <div style={{ maxWidth: "480px", width: "100%", textAlign: "center" }}>

        {/* Logo */}
        <img
          src="/assets/images/national-royal-palace-logo.png"
          alt="National Royal Palace"
          style={{ maxWidth: "160px", width: "100%", height: "auto", marginBottom: "40px" }}
        />

        {/* Check circle */}
        <div style={{ width: 80, height: 80, borderRadius: "999px", background: "linear-gradient(135deg, var(--primary-color,#c9a75c) 0%, #b98045 100%)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px", boxShadow: "0 20px 50px rgba(185,128,69,0.35)" }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 style={{ color: "#fff", fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "12px", lineHeight: 1.2 }}>
          Thank You!
        </h1>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "36px" }}>
          Your callback request has been received.<br />
          Our team will get in touch with you <strong style={{ color: "rgba(255,255,255,0.9)" }}>within 24 hours</strong>.
        </p>

        {/* Trust signals */}
        <div style={{ display: "flex", justifyContent: "center", gap: "28px", marginBottom: "40px", flexWrap: "wrap" }}>
          {[
            ["✓", "RERA Approved"],
            ["✓", "35+ Years Legacy"],
            ["✓", "10,000+ Families"],
          ].map(([icon, label]) => (
            <div key={label} style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#c9a75c", fontWeight: 700 }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 28px", background: "linear-gradient(135deg,#c9a75c,#b98045)", color: "#fff", borderRadius: "999px", fontWeight: 700, textDecoration: "none", fontSize: "0.92rem" }}>
            ← Back to Home
          </Link>
          <a href="https://wa.me/919847533355" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 28px", background: "#25d366", color: "#fff", borderRadius: "999px", fontWeight: 700, textDecoration: "none", fontSize: "0.92rem" }}>
            WhatsApp Us
          </a>
        </div>

      </div>
    </div>
  );
}
