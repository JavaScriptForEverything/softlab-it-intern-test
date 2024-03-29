type Props = {
	className?: React.ComponentProps<'div'>['className']
}
export const HomeIcon = ({ className }: Props) => {

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="21.362" height="21.364" viewBox="0 0 21.362 21.364">
			<path 
				className={className}
				id="social-media" 
				d="M20.788,9.292h0L12.071.576a1.966,1.966,0,0,0-2.781,0L.58,9.286l-.009.009A1.966,1.966,0,0,0,1.88,12.645l.061,0h.347v6.413a2.3,2.3,0,0,0,2.3,2.3H8a.626.626,0,0,0,.626-.626V15.709a1.051,1.051,0,0,1,1.05-1.05h2.011a1.051,1.051,0,0,1,1.05,1.05v5.028a.626.626,0,0,0,.626.626h3.41a2.3,2.3,0,0,0,2.3-2.3V12.648H19.4a1.967,1.967,0,0,0,1.392-3.357Zm0,0" transform="translate(0 0.001)" fill="#fff"/>
		</svg>
	)
}
