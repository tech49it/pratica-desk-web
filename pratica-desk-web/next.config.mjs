import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Without this, Next.js walks up from this directory looking for a
  // workspace root and stops at the first package-lock.json it finds —
  // which on this machine is an unrelated lockfile at ~/package-lock.json.
  // That misdetected root breaks the /_next/image optimizer's internal
  // file lookup (empty response / 400) for local /public images.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
