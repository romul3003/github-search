import React, { useReducer } from 'react'
import { GithubContext } from './githubContext'
import { githubReducer } from './githubReducer'

export const GithubState = ({ children }) => {
	const initialState = {
		user: {},
		users: [],
		loading: false,
		repos: [],
	}
	// eslint-disable-next-line no-unused-vars
	const [state, dispatch] = useReducer(githubReducer, initialState)

	return <GithubContext.Provider value={{}}>{children}</GithubContext.Provider>
}
