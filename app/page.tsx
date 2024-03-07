import { ArrowRightIcon } from '@/components/icons'
import ImageGroup from '@/components/imageGroup'
import RegistrationForm from '@/components/registrationForm'
import Link from 'next/link'

const Home = () => {

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
					<RegistrationForm />
				</section>

				{/* Next Button Section */}
				<section className='relative my-12 flex flex-col gap-1 justify-center items-center'>
					<div>
						<span className='absolute left-0 text-sm text-slate-400'>1/4 steps</span>
						<Link href='/about'>
							<button className='bg-slate-900 p-2 rounded-full'>
								<ArrowRightIcon className='w-4 h-4' />
							</button>
						</Link>
					</div>

					<span className='text-sm text-slate-700'>Next</span>
				</section>
			</div>

		</main>
	)
}
export default Home
