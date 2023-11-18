import Box from '@/components/ui/box';
import Icon from '@/components/ui/icon';
import Link from 'next/link';
import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { icons } from 'lucide-react';
import { useLocale } from 'next-intl';
import { cn } from '@/common/lib/utils';

declare type TTopNavItem = {
	icon: keyof typeof icons;
	label: string;
	href: string;
	show: boolean;
	disabled?: boolean;
};

// export const getStaticPaths = ({ locales }) => {};

const HeaderTop: React.FunctionComponent = () => {
	const locale = useLocale();
	const t = useTranslations('common');

	const topNavItems = useMemo<Array<TTopNavItem>>(
		() => [
			{ icon: 'Search', label: 'Tìm kiếm đơn hàng', href: `/${locale}/search-order`, show: true },
			{ icon: 'MapPin', label: 'Tìm cửa hàng', href: `/${locale}/search-store`, show: true },
			{ icon: 'ShoppingBag', label: 'Giỏ hàng', href: `/${locale}/cart`, show: true },
			{ icon: 'Heart', label: 'Yêu thích', href: `/${locale}/wish-list`, show: true },
			{ icon: 'User', label: 'Đăng nhập', href: `/${locale}/signin`, show: true }
		],
		[locale, t]
	);

	return (
		<Box className='flex items-center text-white gap-6 justify-end bg-gray-950 p-3 sm:hidden'>
			{topNavItems.map((item, index) => (
				<Link
					locale={false}
					className={cn(
						'text-white hover:text-primary inline-flex items-center gap-2 text-sm ease-in-out duration-200',
						{ hidden: !item.show }
					)}
					key={index}
					href={item.href}>
					<Icon name={item.icon} /> {item.label}
				</Link>
			))}
		</Box>
	);
};

export default HeaderTop;
