'use client';

import { useTheme } from 'next-themes';
import { Icon, Swap } from '@/components/ui';
import { NEXT_THEMES } from '@/common/constants/enums';

const ThemeSelect = () => {
	const { setTheme, theme } = useTheme();

	const handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentTheme = e.target.checked ? NEXT_THEMES.LIGHT : NEXT_THEMES.DARK;
		setTheme(currentTheme);
	};

	return (
		<Swap
			swapOn={<Icon name='Sun' />}
			swapOff={<Icon name='Moon' />}
			checked={theme === NEXT_THEMES.LIGHT || theme === NEXT_THEMES.SYSTEM}
			onChange={(e) => handleChangeTheme(e as React.ChangeEvent<HTMLInputElement>)}
		/>
	);
};

export default ThemeSelect;
