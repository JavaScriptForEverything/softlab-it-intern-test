import Image from 'next/image'

const ImageGroup = () => {

	return (
		<>
			{/* <Image 
				src='/Assets/page_1_mask_curve.png' 
				alt='hero' 
				width={200}
				height={100}
			/>
			<Image 
				src='/Assets/page_1_curve.png' 
				alt='hero' 
				width={200}
				height={100}
			/> */}
			<Image 
				src='/Assets/page_1_hero-image.png' 
				alt='hero' 
				width={200}
				height={100}
				className="
					w-40 h-40
					bg-gradient-to-b:
				"
			/>

		</>
	)
}
export default ImageGroup
