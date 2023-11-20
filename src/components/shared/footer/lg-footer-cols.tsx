import { Box, Button, Icon, Typography } from '@/components/ui'
import { Link } from '@/navigation'
import { useLocale, useTranslations, type AppLocale } from 'next-intl'
import FOOTER_ITEMS from './footer-items'

type Props = {};

const LargeScreenFooterCols = (props: Props) => {
	const locale = useLocale() as AppLocale;
	const t = useTranslations();
	return (
		<Box className='max-w-full mx-auto grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-12 items-start sm:hidden'>
			{FOOTER_ITEMS.map((col, i) => (
				<Box key={i}>
					<Typography variant='heading6' className='mb-3'>
						{t(col.title)}
					</Typography>
					<Box className='lg:flex xl:flex flex-col flex gap-3'>
						{col.items.map(({ href, text }, j) => (
							<Link
								key={`${i}.${j}`}
								locale={locale}
								href={href}
								className='hover:text-primary duration-200 ease-in-out'>
								{t(text)}
							</Link>
						))}
					</Box>
				</Box>
			))}
			<Box>
				<Typography variant='heading6' className='mb-3'>
					ANANAS SOCIAL
				</Typography>
				<Box className='flex items-center gap-6'>
					<a href='https://www.facebook.com/Ananas.vietnam/' target='_blank'>
						<Button variant='ghost' size='icon'>
							<Icon name='Facebook' size={32} />
						</Button>
					</a>
					<a href='https://www.instagram.com/ananasvn/' target='_blank'>
						<Button variant='ghost' size='icon'>
							<Icon name='Instagram' size={32} />
						</Button>
					</a>
					<a href='https://www.youtube.com/discoveryou' target='_blank'>
						<Button variant='ghost' size='icon'>
							<Icon name='Youtube' size={32} />
						</Button>
					</a>
				</Box>
			</Box>
			<Button className='sm:inline-flex md:inline-flex items-center justify-center gap-2 space-y-10 hidden' asChild>
				<Link href={`/${locale}/search-store`}>
					<Icon name='Search' /> {t('links.search_store')}
				</Link>
			</Button>
		</Box>
	);
};

export default LargeScreenFooterCols;
