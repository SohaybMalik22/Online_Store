import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soniazari.pk"),
  title: {
    default: `${site.fullName} — Formal, Party & Bridal Wear`,
    template: `%s — ${site.fullName}`,
  },
  description: site.intro,
  keywords: [
    "boutique",
    "bridal wear",
    "party wear",
    "formal wear",
    "custom stitching",
    "Lahore",
  ],
  openGraph: {
    title: `${site.fullName} — ${site.tagline}`,
    description: site.intro,
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#faf7f2",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Warm up the image host before the hero request goes out */}
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        {/* Scroll reveals need JS to un-hide. Without it, show everything.
            Done as a <noscript> style rather than a class the client strips,
            so the server and client markup stay identical. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
