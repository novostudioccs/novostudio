/** @type {import('next').NextConfig} */
// PREVIEW=1: versión estática para la vista previa. NEXT_PUBLIC_BASE_PATH: subcarpeta en GitHub Pages.
const estatico = process.env.PREVIEW === "1" || !!process.env.GITHUB_ACTIONS;

// Las fotos ya están generadas en estos anchos (public/proyectos); lib/cargador.ts elige el archivo.
const images = { loader: "custom", loaderFile: "./lib/cargador.ts", deviceSizes: [320, 640, 960, 1280, 1920], imageSizes: [160] };

const nextConfig = estatico ? { output: "export", basePath: process.env.NEXT_PUBLIC_BASE_PATH || "", images } : { images };

export default nextConfig;
