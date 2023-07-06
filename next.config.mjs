/** @type {import('next').NextConfig} */
const nextConfig = {
	redirects: () => [
		{
			source: '/',
			destination: '/1',
			permanent: false,
		},
	],
};

export default nextConfig;
