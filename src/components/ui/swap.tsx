import { forwardRef, useId, useRef } from 'react';
import tw from 'tailwind-styled-components';

type TSwapButtonProps = React.ClassAttributes<HTMLLabelElement> &
	React.LabelHTMLAttributes<HTMLLabelElement> & {
		checked?: boolean;
		onChange?: React.ChangeEventHandler<HTMLInputElement>;
		swapOn: React.ReactNode;
		swapOff: React.ReactNode;
	};

export const Swap = forwardRef<React.Ref<HTMLInputElement>, TSwapButtonProps>(
	({ checked, swapOn, swapOff, onChange, ...rest }: TSwapButtonProps, ref) => {
		const id = useId();
		const localRef = useRef(null);
		const resolvedRef = (ref || localRef) as React.MutableRefObject<any>;

		return (
			<SwapButton htmlFor={id} {...rest}>
				<ButtonToggler
					id={id}
					type='checkbox'
					checked={checked}
					ref={resolvedRef}
					onChange={(e) => {
						if (onChange) onChange(e);
					}}
				/>
				<ButtonLabel className='opacity-0 peer-checked:opacity-100 peer-checked:-rotate-45 peer-indeterminate:opacity-0'>
					{swapOn}
				</ButtonLabel>
				<ButtonLabel className='opacity-100 peer-checked:opacity-0 peer-checked:-rotate-45'>{swapOff}</ButtonLabel>
			</SwapButton>
		);
	}
);
const SwapButton = tw.label`
	cursor-pointer
	relative
	inline-grid
	place-content-center
	select-none
	padding-1
	w-8
	h-8
	[&>*]:align-middle
	[&>*]:col-start-1
	[&>*]:row-start-1
	[&>*]:duration-300
   [&>*]:transition-all
`;

const ButtonToggler = tw.input`
	peer
	appearance-none
	absolute
	inset-0
`;
const ButtonLabel = tw.div`
	cursor-pointer
	select-none
	leading-0
	text-base
`;
