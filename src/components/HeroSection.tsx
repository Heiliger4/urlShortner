"use client";

import { Link } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 px-4">
      {/* Diagonal gradient overlay */}
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

      {/* Glassmorphism blurred blobs - visible in both modes, with better contrast */}
      {/* Purple blob */}
      <div
        className="absolute -top-32 -left-32 w-[340px] h-[340px] rounded-full z-0"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #a78bfa 70%, transparent 100%)",
          opacity: "0.55",
          filter: "blur(48px)",
        }}
      />
      {/* Pink blob */}
      <div
        className="absolute top-1/2 left-0 w-[260px] h-[260px] rounded-full z-0"
        style={{
          background:
            "radial-gradient(circle at 40% 60%, #f472b6 70%, transparent 100%)",
          opacity: "0.45",
          filter: "blur(48px)",
          transform: "translateY(-50%)",
        }}
      />
      {/* Blue blob */}
      <div
        className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full z-0"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #60a5fa 70%, transparent 100%)",
          opacity: "0.5",
          filter: "blur(48px)",
          transform: "translateY(40%)",
        }}
      />
      {/* Dark mode overlays for blobs */}
      <div
        className="absolute -top-32 -left-32 w-[340px] h-[340px] rounded-full z-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #7c3aed 80%, transparent 100%)",
          opacity: "0.6",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-1/2 left-0 w-[260px] h-[260px] rounded-full z-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(circle at 40% 60%, #db2777 80%, transparent 100%)",
          opacity: "0.5",
          filter: "blur(60px)",
          transform: "translateY(-50%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full z-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #2563eb 80%, transparent 100%)",
          opacity: "0.55",
          filter: "blur(60px)",
          transform: "translateY(40%)",
        }}
      />

      {/* Animated pulsing circle background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="w-[420px] h-[420px] rounded-full bg-primary/20 dark:bg-primary/30 animate-pulse-slow shadow-2xl" />
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

      {/* Subtle background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full filter blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
            <Link className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Mamush Url Shortener
          </h1>
        </div>

        {/* Main headline */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-[1.15] space-y-4">
          <span className="block mb-4">Transform</span>
          <span
            className="block mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
            style={{ lineHeight: "1.15" }}
          >
            Long URLs
          </span>
          <span className="block mb-4">Into Short Links</span>
        </h2>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed space-y-2">
          Professional URL shortening with analytics.
          <span className="block mt-4 text-lg text-gray-500 dark:text-gray-400">
            No registration required • Free forever • Enterprise ready
          </span>
        </p>

        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800 mb-16">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-green-700 dark:text-green-300">
            All systems operational
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
      <style jsx global>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.12);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}
