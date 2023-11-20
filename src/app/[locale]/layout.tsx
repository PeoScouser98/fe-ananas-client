import '@/styles/globals.css';
import { LOCALES } from '@/common/constants/enums';
import { cn } from '@/common/lib/utils';
import Footer from '@/components/shared/footer';
import Navbar from '@/components/shared/navbar';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { notFound } from 'next/navigation';
import React from 'react';
import AppProvider from './app-provider';

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans'
});

declare type TRootLayoutProps = {
	params: { locale: 'en' | 'vi' };
} & React.PropsWithChildren;

export const meta: Metadata = {
	title: 'Ananas',
	description: 'Sneaker store',
	icons: '/logo.svg'
};

const RootLayout: React.FC<TRootLayoutProps> = ({ children, params }) => {
	if (!LOCALES.includes(params.locale)) notFound();

	return (
		<html lang={params.locale} suppressHydrationWarning>
			<AppProvider>
				<body
					className={cn(
						'min-h-screen bg-background font-sans antialiased scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-200',
						fontSans.variable
					)}>
					<Navbar />
					{children}
					<Footer />
				</body>
			</AppProvider>
		</html>
	);
};

export default RootLayout;
