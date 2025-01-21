/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Отключаем оптимизацию для статической сборки (например, для GitHub Pages)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  basePath: '/repository-name', // Установите имя репозитория для GitHub Pages
  assetPrefix: '/repository-name', // Установите префикс для статических ресурсов
};

export default nextConfig;
