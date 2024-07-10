// @ts-check
 
/**
 * @type {import('next').NextConfig}
 **/
 const nextConfig = {
  /* config options here */
  output: "standalone",
  // output: 'export',
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}
 
module.exports = nextConfig