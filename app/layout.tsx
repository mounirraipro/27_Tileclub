import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdSenseLoader from './components/AdSenseLoader';
import CookieConsentBanner from './components/CookieConsentBanner';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tile Club – Free Online Browser Game",
    template: "%s | Tile Club",
  },
  description:
    "Play Tile Club online free — Play Tile Club free online — no download, no account needed. No download, no account needed.",
  keywords: [
    "Tile Club",
    "Tile Club online",
    "Tile Club free",
    "free online game",
    "browser game",
    "casual game",
  ],
  authors: [{ name: "Tile Club Team" }],
  creator: "Tile Club",
  publisher: "Tile Club",
  metadataBase: new URL("https://tileclub.site"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Tile Club",
    title: "Tile Club – Free Online Browser Game",
    description:
      "Play Tile Club free in your browser — Play Tile Club free online — no download, no account needed.",
    url: "https://tileclub.site",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tile Club – Free Online Browser Game",
    description:
      "Play Tile Club free online — no download, no account needed. Play free online!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function getPublisherId() {
  const raw = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  if (!raw) return '';
  return raw.startsWith('ca-pub-') ? raw : `ca-pub-${raw}`;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publisherId = getPublisherId();

  return (
    <html lang="en">
        <head>
        <AdSenseLoader publisherId={publisherId} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Tile Club",
              url: "https://tileclub.site",
              description:
                "Play Tile Club free online — no download, no account needed.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://tileclub.site/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tile Club",
              url: "https://tileclub.site",
              logo: {
                "@type": "ImageObject",
                url: "https://tileclub.site/og-image.png",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                url: "https://tileclub.site/contact",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
