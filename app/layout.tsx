import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "National Royal Palace – Premium 3 & 4 BHK Apartments in Kochi",
  description: "National Royal Palace by National Builders – Luxury 3 & 4 BHK apartments at Pathadipalam, Edappally, Kochi. RERA: K-RERA/PRJ/ERN/156/2025."
};

const stylesheetHrefs = [
  "/assets/bootstrap.min.css",
  "/assets/plugins.css",
  "/assets/swiper.css",
  "/assets/style.css",
  "/assets/coloring.css",
  "/assets/swiper-custom-1.css",
  "/assets/datepicker.css",
  "/assets/colors/scheme-01.css",
  "/assets/fonts/et-line-font/style.css",
  "/assets/fonts/icofont/icofont.min.css",
  "/assets/responsive.css"
];

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/national-royal-palace-logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/images/national-royal-palace-logo.png" />
        <link rel="preload" as="image" href="/assets/images/gbp22-opt.jpg" fetchPriority="high" />
        {stylesheetHrefs.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        {/* Critical overrides — inlined so they can never be blocked by file caching */}
        <style>{`
          body { overflow-x: hidden !important; overflow-y: auto !important; }
          html { overflow-x: hidden !important; }
          footer { background: #1C1428 !important; color: rgba(255,255,255,0.85) !important; display: block !important; visibility: visible !important; opacity: 1 !important; }
          footer * { visibility: visible !important; }
          #section-contact, #section-contact * { visibility: visible !important; opacity: 1; }
        `}</style>
      </head>
      <body suppressHydrationWarning>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TR73273W"
            height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        {children}
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TR73273W');
        `}</Script>
      </body>
    </html>
  );
}
