'use client';

import {
	Box,
	Button,
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Icon,
	Input,
	Label
} from '@/components/ui';
import { useTranslations } from 'next-intl';

const SearchBox: React.FunctionComponent = () => {
	const t = useTranslations();

	return (
		<>
			<Box className='relative sm:hidden'>
				<Icon name='Search' className='absolute top-1/2 -translate-y-1/2 left-2' />
				<Input className='pl-8' placeholder='Tìm kiếm ...' />
			</Box>
			<Dialog>
				<DialogTrigger asChild className='sm:inline-flex hidden'>
					<Button variant='ghost' size='icon'>
						<Icon name='Search' size={18} />
					</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-md'>
					<DialogHeader>
						<DialogTitle>Tìm kiếm</DialogTitle>
						{/* <DialogDescription>Bạn muốn tìm sản phẩm gì ? Hãy nhập từ khóa bên dưới.</DialogDescription> */}
					</DialogHeader>
					<div className='flex items-center space-x-2'>
						<div className='grid flex-1 gap-2'>
							<Label htmlFor='link' className='sr-only'>
								Link
							</Label>
							<Input id='link' placeholder='Hãy nhập gì đó ...' />
						</div>
						<Button variant='outline' size='icon'>
							<Icon name='Search' />
						</Button>
					</div>
					<DialogFooter className='sm:justify-start'>
						<DialogClose asChild>
							<Button type='button' variant='secondary'>
								{t('actions.close')}
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default SearchBox;
