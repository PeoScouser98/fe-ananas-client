import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Box,
	Button,
	Icon,
	NavigationMenuLink
} from '@/components/ui';
import tw from 'tailwind-styled-components';
import FOOTER_ITEMS from './footer-items';
import { forwardRef } from 'react';
import { cn } from '@/common/lib/utils';
import { type AppLocale, useLocale, useTranslations } from 'next-intl';
import { Link } from '@/navigation';

const SmallScreenFooterCols = () => {
	const locale = useLocale() as AppLocale;
	const t = useTranslations();

	return (
		<>
			<Accordion type='single' collapsible className='w-full'>
				{FOOTER_ITEMS.map((item, index) => (
					<AccordionItem
						value={index.toString()}
						className='border-b-[2px] border-b-muted-foreground border-dashed'>
						<AccordionTrigger className='hover:no-underline'>{item.title}</AccordionTrigger>
						<AccordionContent>
							<List>
								{item.items.map(({ href, text }) => (
									<ListItem href={{ ...href, pathname: `/${locale}/${href.pathname}` }}>{text}</ListItem>
								))}
							</List>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
			<Button asChild className='flex items-center justify-center gap-3 mt-6' size='lg'>
				<Link locale={locale} href='/search-store'>
					<Icon name='Search' />
					{t('links.search_store')}
				</Link>
			</Button>
		</>
	);
};

const List = tw.ul`flex flex-col gap-px`;

const ListItem = forwardRef<React.ElementRef<typeof Link>, React.ComponentPropsWithoutRef<typeof Link>>(
	({ className, children, href, ...props }, ref) => {
		return (
			<Link href={href} {...props}>
				<li
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted/10 hover:text-primary focus:bg-accent focus:text-accent-foreground',
						className
					)}>
					{children}
				</li>
			</Link>
		);
	}
);

export default SmallScreenFooterCols;
