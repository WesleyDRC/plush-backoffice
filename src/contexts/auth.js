import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
	const [user, setUser] = useState(null)

	useEffect(() => {
    const userToken = localStorage.getItem("user_token");

    if (userToken) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(userToken)}`;
      setUser(JSON.parse(userToken));
    }
  }, []);

	const SignIn = async (email, password) => {
		try {
			const response = await api.post("/auth", { email, password})

			localStorage.setItem("user_token", JSON.stringify(response.data.token))

			api.defaults.headers.Authorization = `Bearer ${response.data.token}`
			setUser(response.data.token)
		} catch (error) {
      if (error.response.status !== error.response.status.ok) {
        return error.response.data.message;
      }
		}
	}

	return (
		<AuthContext.Provider
			value={{
				user, SignIn
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
