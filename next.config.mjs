/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
  images: {
    domains: ['drive.google.com', 'lh3.googleusercontent.com', 'res.cloudinary.com'],
  },
};

export default nextConfig;
