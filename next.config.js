/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 14
  experimental: {
    // Reduce webpack warnings
    optimizePackageImports: ['lucide-react'],
  },
  webpack: (config, { dev, isServer }) => {
    // Reduce webpack warnings and optimize performance
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    
    // Suppress specific webpack warnings
    config.ignoreWarnings = [
      /Module not found: Can't resolve/,
      /Critical dependency: the request of a dependency is an expression/,
    ]
    
    return config
  },
  // Disable source maps in development to reduce warnings
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
