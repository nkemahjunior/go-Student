/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "tbxarkrrkxrmrsziuhri.supabase.co",
          },
        ],
      },
}

module.exports = nextConfig
