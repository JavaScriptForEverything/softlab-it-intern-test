'use client'
import { Input } from '@/components'
import { ArrowRightIcon } from '@/components/icons'
import ImageGroup from '@/components/imageGroup'

const Home = () => {
	const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
		console.log(evt.target.value)
	}

	return (
		<main className='h-screen max-w-[599px] mx-auto bg-blue-100/10'>
			<ImageGroup 
				coverImage='/Assets/page_1_hero-image.png'
				images={['/Assets/page_1_mask_curve.png', '/Assets/page_1_curve_image.png']}
			/>
			
			

			<div className='px-8'>

				{/* title section */}
				<p className='my-8 font-bold text-slate-800 text-center'>
					Let&apos;s do your diet <span className='text-green-500'>katy</span>
				</p>

				{/* Input section */}
				<section className='my-4 flex flex-col gap-4 justify-center items-center'>
					<Input onChange={changeHandler} />
					<Input onChange={changeHandler} />

				</section>

				{/* Next Button Section */}
				<section className='relative mt-12 flex flex-col gap-1 justify-center items-center'>
					<div>
						<span className='absolute left-0 text-sm text-slate-400'>1/4 steps</span>
						<button className='bg-slate-900 p-2 rounded-full'>
							<ArrowRightIcon className='w-4 h-4' />
						</button>
					</div>

					<span className='text-sm text-slate-700'>Next</span>
				</section>
			</div>

		</main>
	)
}
export default Home
