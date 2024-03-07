'use client'
import { useState } from 'react'
import { Input } from '.'

const RegistrationForm = () => {
	const [ fields, setFields ] = useState({
		email: '',
		password: ''
	})

	const changeHandler = (name: keyof typeof fields) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFields({ ...fields, [name]: evt.target.value })
	}

	const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		// handle form submition here
		console.log(fields)

	}

	return (
		<form onSubmit={submitHandler}>
			<Input onChange={changeHandler('email')} value={fields['email']} />
			<Input onChange={changeHandler('password')} value={fields['password']} />
		</form>
	)
}
export default RegistrationForm
