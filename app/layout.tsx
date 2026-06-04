import type { Metadata } from "next";
import { Geist, Geist_Mono, Titillium_Web } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium-web",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tornadoalley.f3nation.com"),
  alternates: { canonical: "/" },
  title: "Tornado Alley - F3 Fitness Community",
  description: "Welcome to Tornado Alley, a free fitness group dedicated to building stronger men through peer-led workouts, leadership development, and community service.",
  keywords: ["F3", "Tornado Alley", "fitness", "workout", "community", "mens fitness", "free fitness group", "outdoor workout"],
  authors: [{ name: "F3 Tornado Alley" }],
  creator: "F3 Tornado Alley",
  publisher: "F3 Tornado Alley",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tornadoalley.f3nation.com",
    title: "Tornado Alley - F3 Fitness Community",
    description: "Welcome to Tornado Alley, a free fitness group dedicated to building stronger men through peer-led workouts, leadership development, and community service.",
    siteName: "Tornado Alley",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "F3 Tornado Alley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tornado Alley - F3 Fitness Community",
    description: "Welcome to Tornado Alley, a free fitness group dedicated to building stronger men through peer-led workouts, leadership development, and community service.",
    images: ["/images/og-image.png"],
    creator: "@f3tornadoalley",
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
  icons: {
    icon: [
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  verification: {
    // Add your verification codes here when ready
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Speed up the cross-origin LCP hero image (hosted on Cloudflare R2) */}
        <link rel="preconnect" href="https://pub-c59a7d8d850842288d7852af88d4ee66.r2.dev" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pub-c59a7d8d850842288d7852af88d4ee66.r2.dev" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${titilliumWeb.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
