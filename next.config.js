/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/komlraj',
  assetPrefix: '/komlraj',
}

module.exports = nextConfig 