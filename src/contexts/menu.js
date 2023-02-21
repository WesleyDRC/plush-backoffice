import { createContext, useState, useEffect } from "react";

export const MenuContext = createContext({})

export const MenuProvider = ({children}) => {

	const [menu, setMenu] = useState(true)
	const [dimensions, setDimensions] = useState({
		height: window.innerHeight,
		width: window.innerWidth
	})

	useEffect(() => {
		function handleResize() {
			setDimensions({
				height: window.innerHeight,
        width: window.innerWidth
			})
		}

		window.addEventListener('resize', handleResize)
		if(dimensions.width > 760) {
			setMenu(true)
			document.body.style.overflow = "initial"
		}
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [dimensions])

	const handleMenuDesktop = () => {
		console.log("Clicou no desktop")
	}

	const hamburguerMobile = () => {
		document.body.style.overflow = menu ? "hidden" : "initial"
		setMenu(!menu)
	}

	return (
		<MenuContext.Provider
			value={{
				handleMenuDesktop, hamburguerMobile, menu
			}}
		>
			{children}
		</MenuContext.Provider>
	)
}
