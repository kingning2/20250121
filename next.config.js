/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'canvas': false,
      'pdfjs-dist': require.resolve('pdfjs-dist/legacy/build/pdf'),
    };
    
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      stream: false,
      canvas: false,
    };
    
    return config;
  },
};

module.exports = nextConfig; 