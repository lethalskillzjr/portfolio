/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // needed only if you're deploying to GitHub Pages or another static host
  },
  // ❌ Remove "sentry" here, it's not valid
  // sentry: { hideSourceMaps: true },
};

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(nextConfig, {
  org: "abdulhakim-aminu-ibrahim",
  project: "javascript-nextjs",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  widenClientFileUpload: true,

  // ❌ Remove tunnelRoute if using static export
  // tunnelRoute: "/monitoring",

  disableLogger: true,
  automaticVercelMonitors: true,
});
