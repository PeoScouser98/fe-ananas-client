import createMiddleware from 'next-intl/middleware';
import { LOCALES } from '@/common/constants/enums';

export default createMiddleware({
	// * List of all locales that are supported
	locales: LOCALES,
	// * Used when no locale matches
	defaultLocale: 'vi',
});

export const config = {
	// * Match only internationalized pathnames
	matcher: ['/', '/(vi|en)/:path*'],
};
