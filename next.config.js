/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["nb-test-strapi.ru"],
  },
}

module.exports = nextConfig