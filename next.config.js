/** @type {import('next').NextConfig} */

module.exports = (phase, { defaultConfig }) => {
  if ('sassOptions' in defaultConfig) {
    defaultConfig.sassOptions = {
      includePaths: ['./src'],
      prependData: '@import "~@/styles/variables.scss";',
    };
  }

  const nextConfig = {
    reactStrictMode: false,
    env: {
      API_BASE_URL: process.env.API_BASE_URL,
      APP_URL: process.env.APP_URL,
      SENTRY_DSN: process.env.SENTRY_DSN,
    },
    images: {
      unoptimized: true,
    },

    trailingSlash: false,

    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
  };
  return nextConfig;
};
