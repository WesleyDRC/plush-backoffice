import { createContext, useState } from "react";
import { api } from "../services/api";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
	const [user, setUser] = useState([])
	const getInfoUser = async () => {
		try {
			const response = await api.get("/user/profile")
			setUser(response.data[0])
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<UserContext.Provider
			value={{
				getInfoUser, user
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
