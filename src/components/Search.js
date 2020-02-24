import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'

const Search = () => {
	const [value, setValue] = useState('')
	const { show } = useContext(AlertContext)

	const onSubmit = event => {
		if (event.key !== 'Enter') {
			return
		}

		if (value.trim()) {
			// eslint-disable-next-line no-console
			console.log('Make request width: ', value)
		} else {
			show('Please, enter your data!', 'warning')
		}
	}

	return (
		<div className="form-group">
			<input
				type="text"
				className="form-control"
				placeholder="Enter your github username"
				value={value}
				onChange={event => setValue(event.target.value)}
				onKeyPress={onSubmit}
			/>
		</div>
	)
}

export default Search
