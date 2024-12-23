/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/shop/:path*',
          destination: `http://localhost:3001/shop/:path*`,
        },
        {
          source: '/admin/:path*',
          destination: `http://localhost:3002/admin/:path*`,
        },
      ],
    }
  },
}

module.exports = nextConfig 