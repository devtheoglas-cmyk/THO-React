/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site is a faithful 1:1 port of the static Figma build; assets live in /public.
  // Strict mode off: the legacy scripts attach real DOM listeners on mount and must
  // not be double-invoked in dev.
  reactStrictMode: false,
  // Repo sits under a home dir that has its own stray lockfile; pin the root here.
  turbopack: { root: import.meta.dirname },
  // Hide the dev-only Next.js badge so it doesn't overlap content while previewing.
  devIndicators: false,
};

export default nextConfig;
