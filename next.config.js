/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: 'images.unsplash.com', protocol: 'https'}],
    },
    experimental:{
        serverActions: {
            bodySizeLimit: '2mb',
          },
    }
}

module.exports = nextConfig
