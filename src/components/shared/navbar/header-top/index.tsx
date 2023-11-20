'use client';

import { cn } from '@/common/lib/utils';
import { Box, Icon, Swap } from '@/components/ui';
import { Link } from '@/navigation';
import { icons } from 'lucide-react';
import { useLocale, useTranslations, type AppLocale } from 'next-intl';
import { useMemo, useRef } from 'react';
import LanguageSelect from './language-select';
import ThemeSelect from './theme-select';

declare type TTopNavItem = {
	icon: keyof typeof icons;
	label: string;
	href: React.ComponentProps<typeof Link>['href'];
	show: boolean;
	disabled?: boolean;
};

const HeaderTop: React.FunctionComponent = () => {
	const locale = useLocale() as AppLocale;
	const t = useTranslations('links');

	const topNavItems = useMemo<Array<TTopNavItem>>(
		() => [
			{ icon: 'Search', label: 'search_order', href: '/search-order', show: true },
			{ icon: 'MapPin', label: 'search_store', href: '/search-store', show: true },
			{ icon: 'ShoppingBag', label: 'cart', href: '/cart', show: true },
			{ icon: 'Heart', label: 'wish_list', href: '/wish-list', show: true },
			{ icon: 'User', label: 'signin', href: '/signin', show: true }
		],
		[locale, t]
	);

	return (
		<Box className='text-white bg-gray-950 p-3'>
			<Box className='flex items-center justify-between max-w-7xl mx-auto'>
				<Box className='flex items-center gap-6'>
					<LanguageSelect />
					<ThemeSelect />
				</Box>
				<Box className='flex items-center gap-6 sm:hidden'>
					{topNavItems.map((item, index) => (
						<Link
							locale={locale}
							className={cn(
								'text-white hover:text-primary inline-flex items-center gap-2 text-sm ease-in-out duration-200',
								{ hidden: !item.show }
							)}
							key={index}
							href={item.href}>
							<Icon name={item.icon} /> {t(item.label)}
						</Link>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default HeaderTop;
