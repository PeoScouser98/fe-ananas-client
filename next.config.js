const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [{ protocol: 'https', pathname: '**', hostname: '**' }]
	}
};

module.exports = withNextIntl(nextConfig);
