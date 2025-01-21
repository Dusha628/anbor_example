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
};

export default nextConfig;
