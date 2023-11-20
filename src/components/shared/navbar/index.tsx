'use client';

import { Box } from '@/components/ui';
import React from 'react';
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
