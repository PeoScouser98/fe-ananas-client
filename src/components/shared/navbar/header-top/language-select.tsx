'use client';

import EnglishIcon from '@/assets/svgs/sh.svg';
import VietnameseIcon from '@/assets/svgs/vn.svg';
import useCookie from '@/common/hooks/use-cookie';
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	Icon
} from '@/components/ui';
import { usePathname, useRouter } from '@/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useTransition } from 'react';

const LanguageOptions = new Map([
	['vi', { label: 'Tiếng Việt', value: 'vi', icon: VietnameseIcon }],
	['en', { label: 'English', value: 'en', icon: EnglishIcon }]
]);

const LanguageSelect = () => {
	const locale = useLocale();
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [_, setCurrentLanguage] = useCookie('language', 'vi');
	const pathname = usePathname();

	const handleChangeLanguage = (value: string) => {
		setCurrentLanguage(value);
		startTransition(() => {
			router.replace(pathname, { locale: value });
		});
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild disabled={isPending}>
				<Button className='inline-flex items-center gap-2' variant='ghost'>
					<Icon name='Languages' />
					<span>{LanguageOptions.get(locale)?.label}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='min-w-[10rem]'>
				<DropdownMenuLabel>Chọn ngôn ngữ</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup value={locale} onValueChange={handleChangeLanguage}>
					{Array.from(LanguageOptions.values()).map((lang) => (
						<DropdownMenuRadioItem value={lang.value} className='flex items-center gap-2'>
							<Image src={lang.icon} alt='language' width={16} height={16} /> {lang.label}
						</DropdownMenuRadioItem>
					))}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LanguageSelect;
