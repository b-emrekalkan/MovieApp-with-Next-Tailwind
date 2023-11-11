//** @type {import('next').NextConfig} */

const NextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["image.tmdb.org"]
    }

}

module.exports = NextConfig;