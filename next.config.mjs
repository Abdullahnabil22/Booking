/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@mui/material", "@emotion/react", "@emotion/styled"],
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack: (config) => {
    config.externals = [...config.externals, { "mapbox-gl": "mapboxgl" }];
    return config;
  },
};

export default nextConfig;
