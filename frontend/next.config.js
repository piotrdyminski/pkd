/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  i18n: {
    locales: ['pl'],
    defaultLocale: 'pl',
  },
  images: {
    loader: 'default',
    domains: [
      'localhost',
      'parafiakielcedyminy.pl',
      '139.59.133.110', // DigitalOcean
    ],
  },
};

module.exports = nextConfig;
