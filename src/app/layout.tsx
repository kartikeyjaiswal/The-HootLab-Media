import type { Metadata, Viewport } from "next";
import { display, sans } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/AmbientBackground";
import { ViewTransitions } from "@/components/ViewTransitions";
import { SITE } from "@/data/site";
import "./globals.css";

const SITE_URL = `https://${SITE.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The HootLab Media — Creative marketing that makes brands impossible to ignore",
    template: "%s · The HootLab Media",
  },
  description:
    "The HootLab Media is a creative marketing agency helping brands grow through strategy-led content, bold creative execution and performance marketing — reels, social media, brand strategy, and campaigns.",
  keywords: [
    "creative marketing agency",
    "social media marketing",
    "creative reels",
    "brand strategy",
    "influencer marketing",
    "content creation",
    "The HootLab Media",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE.name,
    title: "The HootLab Media — Creative marketing that makes brands impossible to ignore",
    description:
      "Strategy-led content, bold creative, and performance marketing — all under one roof.",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.tagline,
  },
  icons: { icon: "/hootlab-icon.png" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F7F7F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PTL9PPLD');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) — Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18516746039" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-18516746039');`,
          }}
        />
        {/* End Google tag (gtag.js) */}
      </head>
      <body className="min-h-screen bg-soft antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PTL9PPLD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-orange focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <ViewTransitions />
        <AmbientBackground />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
