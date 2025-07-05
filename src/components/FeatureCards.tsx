"use client";

import { Zap, BarChart3, Shield } from "lucide-react";

export function FeatureCards() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "URLs shortened instantly with enterprise-grade performance.",
      gradient: "from-indigo-400 to-blue-500",
      bgGradient:
        "from-indigo-50 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/20",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Detailed insights on clicks, locations, and traffic patterns.",
      gradient: "from-purple-400 to-pink-400",
      bgGradient:
        "from-purple-50 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/20",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Built-in protection with optional password security.",
      gradient: "from-blue-400 to-indigo-500",
      bgGradient:
        "from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/20",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Mamush?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            More than just shortening links — we&apos;re building the future of
            link management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${feature.bgGradient} border border-white/20 dark:border-white/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 p-8 bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10 rounded-2xl border border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                500K+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Happy Users
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                2M+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Links Shortened
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                99.9%
              </div>
              <div className="text-gray-600 dark:text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
