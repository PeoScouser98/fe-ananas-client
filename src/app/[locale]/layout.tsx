import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { Inter as FontSans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { cn } from '@/common/lib/utils';
import Navbar from '@/components/base/navbar';
import Footer from '@/components/base/footer';
import { LOCALES } from '@/common/constants/enums';
import type { Metadata } from 'next';
import '@/styles/globals.css';

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

type TRootLayoutProps = {
	params: { locale: 'en' | 'vi' };
} & React.PropsWithChildren;

export const meta: Metadata = {
	title: 'Ananas',
	description: 'Sneaker store',
};

const RootLayout: React.FC<TRootLayoutProps> = ({ children, params }) => {
	if (!LOCALES.includes(params.locale)) notFound();

	return (
		<html lang={params.locale} suppressHydrationWarning>
			<head>
				<link rel='icon' href='/logo.svg' />
			</head>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-200',
					fontSans.variable,
				)}>
				<NextIntlClientProvider>
					<Navbar />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
};
export default RootLayout;
