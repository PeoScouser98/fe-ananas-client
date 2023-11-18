import Box from '@/components/ui/box';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';

const SearchBox: React.FunctionComponent = () => {
	return (
		<>
			<Box className='relative sm:hidden'>
				<Icon name='Search' className='absolute top-1/2 -translate-y-1/2 left-2' />
				<Input className='pl-8' placeholder='Tìm kiếm ...' />
			</Box>
		</>
	);
};

export default SearchBox;
