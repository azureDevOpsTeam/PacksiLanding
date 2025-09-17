/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://packsi.net' : '',
}

module.exports = nextConfig