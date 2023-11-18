import { cn } from '@/common/lib/utils';
import { useMemo } from 'react';

declare type TTypographyProps = {
	as?: React.ElementType;
	variant: 'heading1' | 'heading2' | 'heading3' | 'heading4';
} & React.HTMLAttributes<HTMLElement> &
	React.PropsWithChildren;

const Typography: React.FC<TTypographyProps> = (props) => {
	const { as = 'div', className, children, variant, ...restProps } = props;

	const Element = useMemo(() => {
		switch (variant) {
			case 'heading1':
				return 'h1';
			case 'heading2':
				return 'h2';
			case 'heading3':
				return 'h1';
			case 'heading4':
				return 'h4';
			default:
				return as;
		}
	}, [variant, as]);

	const classnames = cn(
		{
			'text-6xl sm:text-4xl': variant === 'heading1',
			'text-5xl sm:text-3xl': variant === 'heading2',
			'text-4xl sm:text-2xl': variant === 'heading3',
			'text-3xl sm:text-xl': variant === 'heading4',
			'text-base': !variant
		},
		className
	);

	return (
		<Element className={classnames} {...restProps}>
			{children}
		</Element>
	);
};

Typography.defaultProps = {
	as: 'div'
};

export default Typography;
