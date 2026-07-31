/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // Lets the dev server serve JS/HMR assets when opened from a phone on the
  // same Wi-Fi via the LAN IP shown in the "Network:" line when running
  // `npm run dev` - Next.js only trusts "localhost" for this by default.
  allowedDevOrigins: ["192.168.1.8"],
};

export default nextConfig;
