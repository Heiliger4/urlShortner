"use client";

import { Globe, Shield, BarChart3, Heart, Rocket } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 py-14 px-6 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto flex flex-col min-h-[300px] h-full relative z-20">
        {/* Feature highlights */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <div className="flex flex-col items-center gap-2">
              <Globe className="w-6 h-6 text-blue-600 mb-1" />
              <span className="text-base font-semibold text-gray-800 dark:text-gray-200">
                Global CDN
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Optimized delivery and instant redirects worldwide.
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-green-600 mb-1" />
              <span className="text-base font-semibold text-gray-800 dark:text-gray-200">
                Enterprise Security
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                HTTPS encryption & secure link handling by default.
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BarChart3 className="w-6 h-6 text-purple-600 mb-1" />
              <span className="text-base font-semibold text-gray-800 dark:text-gray-200">
                Real-Time Analytics
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Comprehensive analytics to track your link performance.
              </span>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 pb-4 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-700 dark:text-gray-300 text-sm flex flex-wrap items-center justify-center gap-2 px-4">
            © {new Date().getFullYear()} Mamush URL Shortener · by{" "}
            <span className="font-semibold text-primary">enemamushbet</span>
            <Heart
              className="w-4 h-4 text-red-500 animate-pulse shrink-0"
              fill="currentColor"
            />
            <Rocket className="w-4 h-4 text-primary animate-bounce shrink-0" />
          </p>
        </div>
      </div>
    </footer>
  );
}
