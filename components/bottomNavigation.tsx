'use client'
import { CompetitionBadgeIcon, HomeIcon, PersonIcon, SettingIcon } from '@/components/icons'
import { useState } from 'react'

const navigations = [
	{name: 'Home', Icon: HomeIcon },
	{name: 'Profile', Icon: PersonIcon },
	{name: 'Badge', Icon: CompetitionBadgeIcon },
	{name: 'Settings', Icon: SettingIcon },
]


const BottomVavigation = () => {
	const [ selectedMenu, setSelectedMenu ] = useState(0)

	const clickHandler = (index: number) => () => {
		setSelectedMenu(index)
	}

	return (
		<section className='bg-slate-50 my-4 py-4 px-6 shadow flex flex-col gap-4 justify-center items-center rounded-md'>
			<div className='flex gap-2'>
				{navigations.map( ({name, Icon}, index) => (
					<div key={name}>
						{ index === selectedMenu ? (
							<button className='
								flex gap-2 justify-center items-center text-slate-50 capitalize
								bg-green-500 px-3 py-1 rounded-full
							'>
								<Icon className='fill-slate-50'/>
								<span className='font-bold'>{name}</span> 
							</button>
						) : (
							<button onClick={clickHandler(index)} className=' px-4 py-1 rounded-full '>
								<Icon className='fill-slate-300'/>
							</button>
						)}
					</div>
				))}
			</div>
		</section>
	)
}
export default BottomVavigation
