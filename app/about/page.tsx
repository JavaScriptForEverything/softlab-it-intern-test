import { CompetitionBadgeIcon, HomeIcon, PersonIcon, SettingIcon } from '@/components/icons'
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

const navigations = [
	{name: 'Home', Icon: HomeIcon },
	{name: 'Profile', Icon: PersonIcon },
	{name: 'Badge', Icon: CompetitionBadgeIcon },
	{name: 'Settings', Icon: SettingIcon },
]



const About = () => {
	// const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
	// 	console.log(evt.target.value)
	// }

	return (
		<main className='h-screen max-w-[599px] mx-auto bg-red-100/30'>
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
						{ingredients.map(({ name, image }, index) => (
							<div key={name} className='flex flex-col items-center justify-center'>
								<div className=' w-20 h-20 rounded-full border border-red-500 '>
									<Image src={image} alt={name} width={200} height={200} 
										className='object-cover' 
										/>
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

			{/* navigation section */}
			<section className='bg-slate-50 my-4 py-4 px-6 shadow flex flex-col gap-4 justify-center items-center rounded-md'>
				<div className='flex gap-2'>
					{navigations.map( ({name, Icon}, index) => (
						<div key={name}>
							{ index === 0 ? (
								<button className='
									flex gap-2 justify-center items-center text-slate-50 capitalize
									bg-green-500 px-3 py-1 rounded-full
								'>
									<Icon className='fill-slate-50'/>
									<span className='font-bold'>{name}</span> 
								</button>
							) : (
								<button className=' px-4 py-1 rounded-full '>
									<Icon className='fill-slate-300'/>
								</button>
							)}
						</div>
					))}
				</div>
			</section>
		</main>
	)
}
export default About
