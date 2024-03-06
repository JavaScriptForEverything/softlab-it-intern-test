type Props = {
	className?: React.ComponentProps<'div'>['className']
}

export const BackIcon = ({ className }: Props ) => {

	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
			<path fill="currentColor" d="M11.03 8.53a.75.75 0 1 0-1.06-1.06l-4 4a.748.748 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72H18a.75.75 0 0 0 0-1.5H8.31z"/>
		</svg>
	)
}

