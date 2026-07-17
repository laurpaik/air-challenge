/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizePackageImports: [],
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}",
      preventFullImport: true,
    },
  },
  transpilePackages: ["@mui/material", "@mui/system"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "air-prod.imgix.net",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
