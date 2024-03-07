import Link from 'next/link'
import { ArrowRightIcon, BackIcon, HeartIcon } from './icons'

const ImageGroup = () => {
	return (
		<div className='bg-inherit'>
			<div className={`h-72 border 
				[background-image:url(/Assets/page_2_curve_image.png),_url(/Assets/page_2_hero-image.png)]
				[background-repeat:no-repeat]
				[background-size:650px_140px,contain]
				[background-position:0_0,center]
			`}>

				<div className='mt-28 px-12  flex justify-between'>
					<Link href='/'>
						<button className='bg-slate-50 rounded-full shadow-md m-1'>
							<BackIcon className='text-slate-700' />
						</button>
					</Link>

					<button className='bg-slate-50 rounded-full shadow-md m-1'>
						<HeartIcon className='text-red-500' />
					</button>
				</div>

			</div>

		</div>
	)
}
export default ImageGroup
