/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          // Anda bisa menambahkan hostname lain di sini jika menggunakan gambar dari domain lain
           {
            protocol: 'https',
            hostname: 'images.unsplash.com',
             port: '',
             pathname: '/**',
           },
           {
            protocol: 'https',
           hostname: 'cdn.pexels.com',
             port: '',
             pathname: '/**',
           },
            {
            protocol: 'https',
           hostname: 'images.pexels.com',
             port: '',
             pathname: '/**',
           },
        ],
      },
};

export default nextConfig;
