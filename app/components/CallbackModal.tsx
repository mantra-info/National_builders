"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function CallbackModal() {
  const [open, setOpen]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");
  const backdropRef           = useRef<HTMLDivElement>(null);
  const router                = useRouter();

  /* Open when any [data-callback-modal] link is clicked */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-callback-modal]");
      if (target) { e.preventDefault(); setOpen(true); setError(""); }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  /* Close on Escape */
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [open]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd   = new FormData(e.currentTarget);
    const body = { name: fd.get("name"), phone: fd.get("phone"), bhk: fd.get("bhk") };
    try {
      const res = await fetch("/api/callback", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error("Failed");
      setOpen(false);
      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      onClick={(e) => { if (e.target === backdropRef.current) setOpen(false); }}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(11,8,20,0.82)",
        backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
        animation: "nrpFadeIn 0.22s ease",
      }}
    >
      <style>{`
        @keyframes nrpFadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes nrpSlideUp { from { opacity: 0; transform: translateY(28px) scale(0.97); } to { opacity: 1; transform: none; } }
        .nrp-modal-input {
          width: 100%; min-height: 52px; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.07);
          color: #fff; padding: 0 16px;
          font-size: 0.95rem; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          appearance: none; -webkit-appearance: none;
        }
        .nrp-modal-input::placeholder { color: rgba(255,255,255,0.42); }
        .nrp-modal-input:focus {
          border-color: rgba(201,167,92,0.6);
          box-shadow: 0 0 0 4px rgba(201,167,92,0.13);
        }
        .nrp-modal-input option { background: #1c1428; color: #fff; }
        .nrp-submit-btn {
          width: 100%; min-height: 52px; border-radius: 999px; border: none;
          background: linear-gradient(135deg, #c9a75c 0%, #b98045 100%);
          color: #fff; font-weight: 700; font-size: 1rem; cursor: pointer;
          box-shadow: 0 16px 30px rgba(185,128,69,0.28);
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
        }
        .nrp-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 20px 36px rgba(185,128,69,0.36); }
        .nrp-submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }
      `}</style>

      {/* Modal card */}
      <div style={{
        width: "100%", maxWidth: "440px",
        background: "linear-gradient(160deg, #241a34 0%, #1c1428 100%)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "20px",
        boxShadow: "0 40px 80px rgba(0,0,0,0.55)",
        overflow: "hidden",
        animation: "nrpSlideUp 0.28s cubic-bezier(0.34,1.56,0.64,1)",
      }}>

        {/* Header */}
        <div style={{ padding: "28px 28px 0", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--primary-color,#c9a75c)", fontWeight: 700, marginBottom: "6px" }}>
              National Royal Palace
            </div>
            <h3 style={{ margin: 0, color: "#fff", fontSize: "1.35rem", fontWeight: 700, lineHeight: 1.2 }}>
              Request a Callback
            </h3>
            <p style={{ margin: "6px 0 0", color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
              We'll call you back within 24 hours.
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "999px", width: 36, height: 36, cursor: "pointer", color: "rgba(255,255,255,0.7)", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: "24px 28px 28px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <input
            className="nrp-modal-input"
            type="text" name="name" placeholder="Your Name *" required autoComplete="name"
          />
          <input
            className="nrp-modal-input"
            type="tel" name="phone" placeholder="Phone Number *" required autoComplete="tel"
          />
          <select className="nrp-modal-input" name="bhk" defaultValue="">
            <option value="" disabled>Preferred BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="4 BHK">4 BHK</option>
            <option value="Any">Any</option>
          </select>

          {error && (
            <p style={{ margin: 0, color: "#f87171", fontSize: "0.85rem", background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.2)", borderRadius: "8px", padding: "10px 14px" }}>
              {error}
            </p>
          )}

          <button type="submit" disabled={loading} className="nrp-submit-btn" style={{ marginTop: "4px" }}>
            {loading ? "Sending…" : "Send Request"}
          </button>

          {/* Trust line */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", color: "rgba(255,255,255,0.35)", fontSize: "0.78rem" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            100% Confidential — We never share your details.
          </div>

          {/* Quick contact */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "16px", display: "flex", gap: "10px" }}>
            <a href="tel:+919847717771" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "10px", borderRadius: "10px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "0.82rem", fontWeight: 600 }}>
              📞 Call Now
            </a>
            <a href="https://wa.me/919847717771" target="_blank" rel="noopener noreferrer" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "10px", borderRadius: "10px", background: "#25d366", color: "#fff", textDecoration: "none", fontSize: "0.82rem", fontWeight: 600 }}>
              💬 WhatsApp
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
