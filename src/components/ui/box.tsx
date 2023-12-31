'use client';

import React from 'react';

type TBoxProps = { as?: React.ElementType } & React.CSSProperties &
	React.PropsWithChildren &
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Box: React.FC<TBoxProps> = (props) => {
	const { as: Component = 'div', className, style, children, tw, ...restProps } = props;

	return (
		<Component className={className} style={style} {...restProps}>
			{children}
		</Component>
	);
};

Box.defaultProps = {
	as: 'div',
};

export default Box;
