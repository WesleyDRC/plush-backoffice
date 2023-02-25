import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import AxiosRepository from "../repository/AxiosRepository";
import useAuth from "../hooks/useAuth";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {

	const {authenticated} = useAuth()

	useEffect(() => {
		getInfoUser()
	}, [authenticated])

	const [user, setUser] = useState([])

	const getAllUsers = async() => {
		try {
			return await AxiosRepository.findAllUsers()
		} catch (error) {
			return error
		}
	}

	const getInfoUser = async () => {
		try {
			const response = await api.get("/user/profile")
			setUser(response.data[0])
		} catch (error) {
			return error
		}
	}

	const updateUser = async(id, name, email) => {
		try {
			await AxiosRepository.updateUser(id, name, email)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<UserContext.Provider
			value={{
				getInfoUser, user, getAllUsers, updateUser
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
