import { createContext, useState } from "react";
import { api } from "../services/api";
import AxiosRepository from "../repository/AxiosRepository";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {

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

	return (
		<UserContext.Provider
			value={{
				getInfoUser, user, getAllUsers
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
