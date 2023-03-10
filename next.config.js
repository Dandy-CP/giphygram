/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'media0.giphy.com',
      'media1.giphy.com',
      'media2.giphy.com',
      'media3.giphy.com',
      'media4.giphy.com',
      'media5.giphy.com',
      'media6.giphy.com',
      'media7.giphy.com',
      'media8.giphy.com',
      'media9.giphy.com',
      'media10.giphy.com',
    ],
  },
};

module.exports = nextConfig;
