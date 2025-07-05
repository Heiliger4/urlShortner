"use client";

import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { UrlShortener } from "@/components/UrlShortener";
import { FeatureCards } from "@/components/FeatureCards";
import { UpgradeBar } from "@/components/UpgradeBar";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/theme-toggle";
import { LinkPreview } from "@/components/LinkPreview";

interface ShortenedUrl {
  originalUrl: string;
  shortUrl: string;
  shortCode: string;
  createdAt: string;
}

interface Stats {
  totalUrls: number;
  totalClicks: number;
}

export default function Home() {
  const [shortenedUrl, setShortenedUrl] = useState<ShortenedUrl | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [isLoadingStats, setIsLoadingStats] = useState(true);

  // Fetch stats from API
  const fetchStats = async () => {
    try {
      const response = await fetch("/api/stats");
      if (response.ok) {
        const data = await response.json();
        setStats({
          totalUrls: data.totalUrls,
          totalClicks: data.totalClicks,
        });
      }
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    } finally {
      setIsLoadingStats(false);
    }
  };

  useEffect(() => {
    // Initial stats fetch
    fetchStats();

    // Refresh stats every 30 seconds
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleUrlShortened = (data: ShortenedUrl) => {
    setShortenedUrl(data);
    // Refresh stats after a new URL is shortened
    fetchStats();
  };

  return (
    <div className="relative min-h-screen">
      {/* Diagonal gradient background, matching hero section */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div
          className="hidden dark:block w-full h-full"
          style={{
            background: "linear-gradient(120deg, #232946 0%, #232946cc 100%)",
          }}
        />
        <div
          className="block dark:hidden w-full h-full"
          style={{
            background: "linear-gradient(120deg, #e0e7ff 0%, #f8fafc 100%)",
          }}
        />
      </div>
      {/* Transparent noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E\")",
          opacity: 0.7,
        }}
      />
      {/* Theme toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      {/* Main content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* URL Shortener */}
        <section className="relative -mt-20 px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <UrlShortener onUrlShortened={handleUrlShortened} />

            {/* Show link preview if URL was shortened */}
            {shortenedUrl && (
              <div className="mt-8 animate-slide-up">
                <LinkPreview {...shortenedUrl} />
              </div>
            )}
          </div>
        </section>

        {/* Real-time stats */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-full border border-white/20 dark:border-white/10">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {isLoadingStats ? (
                  "Loading stats..."
                ) : stats ? (
                  <>
                    <span className="font-bold text-primary">
                      {stats.totalUrls}
                    </span>{" "}
                    links snipped (
                    <span className="font-bold text-primary">
                      {stats.totalClicks}
                    </span>{" "}
                    total clicks)
                  </>
                ) : (
                  "Unable to load stats"
                )}
              </span>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <FeatureCards />

        {/* Upgrade Bar */}
        <UpgradeBar />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
