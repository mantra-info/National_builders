import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Residem - Single Property Website Template",
  description: "Residem template ported into a Next.js project."
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
  "/assets/fonts/icofont/icofont.min.css"
];

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/icon.webp" sizes="16x16" />
        {stylesheetHrefs.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
