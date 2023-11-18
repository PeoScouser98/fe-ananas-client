import React from 'react';
import Box from '@/components/ui/box';
import Image from 'next/image';
import StoreImage from '@/assets/store.svg';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

const footerLinks = [
	{
		title: 'Sản phẩm',
		links: [
			{ text: 'Giày Nam', href: '' },
			{ text: 'Giày Nữ', href: '' },
			{ text: 'Thời trang & Phụ kiện', href: '' },
			{ text: 'Sale-off', href: '' }
		]
	},
	{
		title: 'VỀ CÔNG TY',
		links: [
			{ text: 'Dứa tuyển dụng', href: '' },
			{ text: 'Liên hệ nhượng quyền', href: '' },
			{ text: 'Về Ananas', href: '' }
		]
	},
	{
		title: 'HỖ TRỢ',
		links: [
			{ text: 'FAQs', href: '' },
			{ text: 'Bảo mật thông tin', href: '' },
			{ text: 'Chính sách chung', href: '' },
			{ text: 'Tra cứu đơn hàng', href: '' }
		]
	},
	{
		title: 'LIÊN HỆ',
		links: [
			{ text: 'Email góp ý', href: '' },
			{ text: 'Hotline', href: '#' }
		]
	}
];

const Footer: React.FunctionComponent = () => {
	const locale = useLocale();
	const t = useTranslations('common');

	return (
		<Box className='bg-gray-950 text-white flex sm:flex-col-reverse justify-around sm:p-3 md:p-3 lg:p-6 xl:p-6'>
			<Box className='flex flex-col gap-6'>
				<Image alt='store' src={StoreImage} className='sm:hidden' width={128} height={128} />
				<Link href={`/${locale}/search-store`}>
					<Button>Tìm kiếm cửa hàng</Button>
				</Link>
			</Box>

			<Box className='flex flex-wrap'>
				<Box></Box>
			</Box>
		</Box>
	);
};

export default Footer;
