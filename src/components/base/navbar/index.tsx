'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Box from '@/components/ui/box';
import HeaderMain from './header-main';
import HeaderTop from './header-top';

const Navbar: React.FunctionComponent = () => {
	return (
		<Box className='flex flex-col items-stretch sticky top-0'>
			<HeaderTop />
			<HeaderMain />
		</Box>
	);
};

export default Navbar;
