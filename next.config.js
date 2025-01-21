// next.config.js

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 
  basePath: '/anbor_example',
  assetPrefix: '/anbor_example',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default nextConfig;
