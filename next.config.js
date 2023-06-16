/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com', 'mir-s3-cdn-cf.behance.net'],
  },
}

module.exports = nextConfig