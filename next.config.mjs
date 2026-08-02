/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // Lets the dev server serve JS/HMR assets when opened from a phone on the
  // same Wi-Fi via the LAN IP shown in the "Network:" line when running
  // `npm run dev` - Next.js only trusts "localhost" for this by default.
  allowedDevOrigins: ["192.168.1.8"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
