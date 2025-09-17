/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://packsi.net' : '',
  // Disable error page generation for static export
  generateEtags: false,
  // Disable server-side features for static export
  poweredByHeader: false,
}

module.exports = nextConfig