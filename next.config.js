/**
 * Если переменная `SKIP_ENV_VALIDATION` установлена, пропускаем валидацию переменных окружения.
 * Это полезно, например, для сборки в Docker.
 */
if (!process.env.SKIP_ENV_VALIDATION) {
  await import("./src/env.js").catch((err) => {
    console.error("Ошибка импорта env.js:", err.message);
    process.exit(1); // Завершаем процесс с кодом ошибки
  });
}

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Отключаем серверную оптимизацию изображений
    unoptimized: true, // Требуется для хостинга на GitHub Pages
  },
  // Устанавливаем базовый путь и префикс для GitHub Pages
  basePath: '/repository-name', // Замените на имя вашего репозитория
  assetPrefix: '/repository-name', // Замените на имя вашего репозитория
};

export default nextConfig;
