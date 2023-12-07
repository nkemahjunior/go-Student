/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "zhbomwoucfylrttqqbzh.supabase.co",
          },
        ],
      },
}

module.exports = nextConfig
