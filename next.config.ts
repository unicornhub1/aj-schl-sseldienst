import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/rechnung",
        destination: "https://drsayf.com/rechnung",
        permanent: true,
      },
      {
        source: "/rechnung2",
        destination: "https://drsayf.com/rechnung2",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
