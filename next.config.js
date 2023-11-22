/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          port: '',
        },
        {
            protocol: 'https',
            hostname: 'i.dummyjson.com',
            port: '',
        }
      ],
    },
  }