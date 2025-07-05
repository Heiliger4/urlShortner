"use client";

import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Check } from "lucide-react";

export function UpgradeBar() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden p-8 bg-gradient-to-r from-primary via-purple-600 to-pink-600 rounded-2xl shadow-2xl">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
            <div
              className="absolute bottom-0 right-1/4 w-24 h-24 bg-white/20 rounded-full blur-xl animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="relative z-10 text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6" />
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                Enterprise Features
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Want custom domains (e.g., yourbrand.Mamush.site) and full
              history?
            </h3>

            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Unlock advanced analytics, custom domains, bulk operations, and
              enterprise-grade features.
            </p>

            <Button
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg"
              onClick={() => {
                // This would typically open a pricing modal or navigate to pricing page
                console.log("Go Pro clicked");
              }}
            >
              Go Pro
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
