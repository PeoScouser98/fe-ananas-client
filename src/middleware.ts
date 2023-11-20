import createMiddleware from 'next-intl/middleware';
import { LOCALES } from '@/common/constants/enums';
import Cookie from 'js-cookie';

export default createMiddleware({
	locales: LOCALES,
	defaultLocale: (Cookie.get('language') as (typeof LOCALES)[number]) || 'vi'
});

export const config = {
	// * Match only internationalized pathnames
	matcher: ['/', '/(vi|en)/:path*']
};
