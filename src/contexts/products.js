import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext({})

export const ProductsProvider = ({children}) => {

	return (
		<ProductsContext.Provider
			value={{
				
			}}
		>
			{children}
		</ProductsContext.Provider>
	)
}
