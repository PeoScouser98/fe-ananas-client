import { icons } from 'lucide-react'

type TIconProps = {
	name: keyof typeof icons
	color?: string
	size?: number
} & React.HTMLAttributes<HTMLOrSVGElement>

const Icon: React.FC<TIconProps> = ({ name, color, size, ...props }) => {
	const LucideIcon = icons[name]

	return <LucideIcon color={color} size={size} {...props} />
}

Icon.defaultProps = {
	size: 16
}

export default Icon
