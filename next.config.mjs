// /** @type {import('next').NextConfig} */

// // Only emit a static export for the production build (`npm run build`),
// // which is what gets uploaded to Hostinger. During `npm run dev` we skip
// // `output: 'export'` — it isn't needed for local dev and its route handling
// // can make nested pages (e.g. /about/) fall through to the 404.
// const isProd = process.env.NODE_ENV === "production";

// const nextConfig = {
//   ...(isProd ? { output: "export" } : {}),
//   // Serve /about/ -> /about/index.html cleanly on Apache/LiteSpeed shared hosting.
//   trailingSlash: true,
//   images: {
//     // No Next image optimizer on static hosting — serve images as-is.
//     unoptimized: true,
//   },
//   // Type errors now fail the build (project is type-clean as of the cleanup).
//   typescript: { ignoreBuildErrors: false },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */

// Only emit a static export for the production build (`npm run build`),
// which is what gets uploaded to Hostinger. During `npm run dev` we skip
// `output: 'export'` — it isn't needed for local dev and its route handling
// can make nested pages (e.g. /about/) fall through to the 404.
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  ...(isProd ? { output: "export" } : {}),

  // Allow LAN access during development. Add your laptop's current Wi-Fi IP here
  // (the "Network:" address `next dev` prints) so you can preview on your phone.
  allowedDevOrigins: [
    // Your laptop's Wi-Fi IP changes on DHCP. If phone preview shows only the
    // footer, add the "Network:" address `next dev` prints to this list.
    "10.171.188.45",
    "10.151.181.45",
    "10.139.156.45",
    "192.168.0.*",
    "192.168.1.*",
    "10.*",
    "localhost",
    "127.0.0.1",
  ],

  // Serve /about/ -> /about/index.html cleanly on Apache/LiteSpeed shared hosting.
  trailingSlash: true,

  images: {
    // No Next image optimizer on static hosting — serve images as-is.
    unoptimized: true,
  },

  // Type errors now fail the build.
  typescript: {
    ignoreBuildErrors: false,
  },

  // Strip console.* (except errors) from the production bundle.
  compiler: { removeConsole: isProd ? { exclude: ["error"] } : false },
};

export default nextConfig;