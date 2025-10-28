/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable Next.js Image Optimization
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    domains: ['images.unsplash.com']
  },
}

module.exports = nextConfig
