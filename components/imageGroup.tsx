type Props = {
	coverImage: string
	images: string[]
}

const ImageGroup = ( props: Props) => {

	const {
		coverImage,
		images
	} = props


	return (
		<div className='bg-inherit'>
			<div className={`h-40 
				[background-image:url(/Assets/page_1_mask_curve.png),_url(/Assets/page_1_curve_image.png)]
				[background-repeat:no-repeat]
				[background-size:850px_400px]
				[background-position:20%_33%,40%_40%]
			`}>
			</div>
			

			<div className={`h-32 -mt-8 
				bg-[url(/Assets/page_1_hero-image.png)]
				bg-no-repeat
				bg-contain
				bg-center
			`}>
			</div>
			{/* <div className={`h-32 -mt-8 
				[background-image:url(/Assets/page_1_hero-image.png)] 
				[background-repeat:no-repeat]
				[background-size:contain]
				[background-position:center]
			`}>
			</div> */}


		</div>
	)
}
export default ImageGroup
