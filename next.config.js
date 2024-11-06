/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "mlxrawglbrshmqmdkoch.supabase.co",
          },
        ],
      },
}

module.exports = nextConfig
