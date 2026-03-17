import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://skillerchampion.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Skiller Champion — Web3 Infrastructure for Startups",
    template: "%s | Skiller Champion",
  },
  description:
    "Skiller Champion helps startups launch and scale on Web3. Smart contracts, token design, and go-to-market support for the next generation of builders.",
  keywords: [
    "Web3",
    "blockchain",
    "startups",
    "smart contracts",
    "token design",
    "crypto",
    "decentralized",
    "Skiller Champion",
  ],
  authors: [{ name: "Skiller Champion", url: siteUrl }],
  creator: "Skiller Champion",
  publisher: "Skiller Champion",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Skiller Champion",
    title: "Skiller Champion — Web3 Infrastructure for Startups",
    description:
      "We help startups launch and scale on Web3. Smart contracts, token design, and go-to-market support.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Skiller Champion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skiller Champion — Web3 Infrastructure for Startups",
    description: "Web3 infrastructure and services for startups.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your LinkedIn verification meta tag value here when provided
    // other: { "linkedin": "your-verification-code" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
