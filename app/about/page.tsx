import BottomVavigation from '@/components/bottomNavigation'
import ImageGroup from '@/components/imageGroup2'
import Image from 'next/image'

const nutritionalInformation = [
	{name: 'calorias', value: '243' },
	{name: 'grasas', value: '2,8g' },
	{name: 'carbohid', value: '45,7g' },
	{name: 'proteinas', value: '9,8g' },
]
const ingredients = [
	{name: 'Kiwi', image: '/Assets/ingredients/sara-cervera-mashroom.png' },
	{name: 'Yogurt', image: '/Assets/ingredients/sara-cervera.png' },
	{name: 'Cherry', image: '/Assets/ingredients/nicholas-barbaros.png' },
	{name: 'Blueberry', image: '/Assets/ingredients/joanna-kosinska.png' },
]


const loadImage = (image: string) => {
	return `url(${image})`
}

const About = () => {

	return (
		<main className='flex flex-col max-w-[599px] mx-auto bg-red-100/20'>
			<div className='flex-1'>
				<ImageGroup />
				
				<div className='px-8'>

					{/* title section */}
					<p className='my-2 font-bold text-slate-800 text-center'>
						Yogurt with fruits
					</p>
					<p className='text-[length:7px] text-center'>
						Quisque sit amet sagittis erat. Duis pharetra ornare venenatis. Nulla
					</p>

					{/* Nutritional information section */}
					<section className='my-4 py-4 px-6 bg-slate-50 shadow flex flex-col gap-4 justify-center items-center rounded-md'>

						<p className='text-[length:12px] text-center text-slate-700'>
							Nutritional information
						</p>

						<div className='w-full flex justify-around '>
							{nutritionalInformation.map(({ name, value }, index) => (
								<div key={name} className='flex flex-col items-center'>
									<span className={`text-2xl font-bold ${ index === 0 ? ' active ': ' '} [&.active]:text-red-500`}>{value}</span>
									<span className='text-[length:10px] text-slate-500'>{name}</span>
								</div>
							))}
						</div>

					</section>


					{/* Ingredients information section */}
					<section className='my-4 py-4 px-6 bg-slate-50 shadow flex flex-col gap-4 justify-center items-center rounded-md'>

						<p className='text-[length:12px] font-semibold text-center text-slate-700'>
							Ingredients
						</p>

						<div className='w-full flex justify-around '>

							{/* {ingredients.map(({ name, image }, index) => (
								<div key={name} className='flex flex-col items-center justify-center'>
									<div className=' w-20 h-20 rounded-full border border-red-500 '>
										<Image src={image} alt={name} width={200} height={200} />
									</div>

									<span className='text-[length:10px] text-slate-500'>{name}</span>
								</div>
							))} */}

							{ingredients.map(({ name, image }, index) => (
								<div key={name} className='flex flex-col items-center justify-center'>
									<div className={`w-20 h-20 rounded-full`}>
											<Image src={image} alt={name} width={200} height={200} />

									</div>

									<span className='text-[length:10px] text-slate-500'>{name}</span>
								</div>
							))}



						</div>

					</section>


					{/* Preparation section */}
					<section className='my-4 py-4 px-6 bg-slate-50 shadow flex flex-col gap-4 justify-center items-center rounded-md'>

						<p className='text-[length:12px] font-semibold text-center text-slate-700'>
							Preparation
						</p>
					</section>
				</div>
			</div>

			{/* bottom navigation section */}
			<div className=''>
				<BottomVavigation />
			</div>
		</main>
	)
}
export default About
