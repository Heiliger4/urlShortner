import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: "Mamush Url Shortener - Shorten. Share. Track.",
  description:
    "Free instant links, no login required. Need more? Upgrade anytime.",
  keywords: "URL shortener, link shortener, mamush url, short links",
  authors: [{ name: "enemamushbet" }],
  openGraph: {
    title: "Mamush Url Shortener - Shorten. Share. Track.",
    description:
      "Free instant links, no login required. Need more? Upgrade anytime.",
    type: "website",
    url: "/",
    siteName: "Mamush",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mamush - Shorten. Share. Track.",
    description:
      "Free instant links, no login required. Need more? Upgrade anytime.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
