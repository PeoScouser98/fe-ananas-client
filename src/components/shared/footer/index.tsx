'use client';

import StoreImage from '@/assets/svgs/store.svg';
import { Box, Button, Typography, Icon } from '@/components/ui';
import { icons } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LargeScreenFooterCols from './lg-footer-cols';
import useMediaQuery from '@/common/hooks/use-media-query';
import { MEDIA_QUERIES } from '@/common/constants/enums';
import SmallScreenFooterCols from './sm-footer-cols';

const Footer: React.FunctionComponent = () => {
	const locale = useLocale();
	const isSmallScreen = useMediaQuery(MEDIA_QUERIES.SMALL);
	const t = useTranslations();

	return (
		<Box className='bg-gray-950 text-white sm:p-3 p-10'>
			<Box className='max-w-7xl mx-auto lg:flex lg:gap-12 mb-10'>
				<Box className='sm:hidden md:hidden flex flex-col gap-6'>
					<Image alt='store' src={StoreImage} width={240} height={240} />
					<Button className='inline-flex items-center justify-center gap-2 space-y-10' asChild>
						<Link href={`/${locale}/search-store`}>
							<Icon name='Search' /> Tìm kiếm cửa hàng
						</Link>
					</Button>
				</Box>
				{isSmallScreen ? <SmallScreenFooterCols /> : <LargeScreenFooterCols />}
			</Box>
			<p className='text-gray-500 text-center mt-20'>
				Copyright @ {new Date().getFullYear()} Ananas. All rights reserved
			</p>
		</Box>
	);
};

export default Footer;
