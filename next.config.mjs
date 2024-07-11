// @ts-check
 
/**
 * @type {import('next').NextConfig}
 **/
 const nextConfig = {
  /* config options here */
  output: "standalone",
  // output: 'export',
  trailingSlash: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-**',
      },
    ],
  },
}
 
module.exports = nextConfig