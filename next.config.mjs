/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'public.tableau.com',
        port: '',
        pathname: '/static/images/**',
      },
    ],
  },
};

export default nextConfig; 