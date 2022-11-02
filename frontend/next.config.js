/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    loader: 'default',
    domains: [
      'localhost',
      '139.59.133.110', // DigitalOcean
    ],
  },
};

module.exports = nextConfig;
