'use client';

import { NEXT_THEMES } from '@/common/constants/enums';
import buildProviders from '@/common/utils/buid-providers';
import English from '@/languages/en.json';
import Vietnamese from '@/languages/vi.json';
import store from '@/store/store';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Provider } from 'react-redux';

const AppProvider: React.FC<React.PropsWithChildren> = (props) => {
	const locale = useLocale();
	const language = (() => {
		switch (locale) {
			case 'vi':
				return Vietnamese;
			case 'en':
				return English;
		}
	})();

	const Providers = buildProviders([
		[
			NextThemesProvider,
			{
				attribute: 'class',
				defaultTheme: NEXT_THEMES.SYSTEM,
				disableTransitionOnChange: true,
				enableSystem: true
			}
		],
		[Provider, { store }],
		[NextIntlClientProvider, { locale: locale, messages: language }]
		// ... other providers
	]);

	return <Providers>{props.children}</Providers>;
};

export default AppProvider;
