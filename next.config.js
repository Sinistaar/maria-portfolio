/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 13.4+
  images: {
    unoptimized: true
  },
  trailingSlash: true
}

module.exports = nextConfig
