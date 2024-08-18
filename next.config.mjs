// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          port: "",
        },
        {
          protocol: "https",
          hostname: "via.placeholder.com",
        },
      ],
    },
  };
  
  export default nextConfig;
  