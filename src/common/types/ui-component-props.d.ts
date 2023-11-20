import type { Control, FieldValues } from 'react-hook-form';

export declare type TRequiredFormFieldProps = {
	name: string;
	control: Control<FieldValues>;
	label?: string;
	description?: string;
};
