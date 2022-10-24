/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: 'default',
    domains: ['localhost'],
  },
};

module.exports = nextConfig;
