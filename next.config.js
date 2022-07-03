const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
