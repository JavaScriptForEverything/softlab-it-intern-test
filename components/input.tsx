'use client'

type Props = {
	className?: React.ComponentProps<'div'>['className'],
	onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = ({ onChange, className }: Props) => {


	return (

		<input onChange={onChange} placeholder='What is your current weight?' className="shadow w-full
			px-3 py-1.5 rounded 
			placeholder:text-[length:12px]
			placeholder:font-medium
			placeholder:text-slate-500
			focus:outline-none
			border focus:border-slate-400
			text-slate-800
		" />
			
	)
}
export default Input
