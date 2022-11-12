/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://parafiakielcedyminy.pl',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: ['/api/*', '/404', '/500'] }],
  },
};
