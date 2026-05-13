import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    // Evita Next usar outro lockfile acima (ex.: /Users/.../package-lock.json) e “perder” o app.
    root: __dirname,
  },
};

export default nextConfig;
