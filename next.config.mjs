/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/admin/default', // The page you want to redirect to
                permanent: true, // Set to false if you might want to change this redirect in the future
            },
        ]
    },
};

export default nextConfig;
