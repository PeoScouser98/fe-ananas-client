import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { LOCALES } from './common/constants/enums';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
	locales: LOCALES
});
