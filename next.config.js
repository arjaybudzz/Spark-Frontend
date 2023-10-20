/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "out",
    experimental: {
        serverActions: true
    }
}

module.exports = nextConfig
