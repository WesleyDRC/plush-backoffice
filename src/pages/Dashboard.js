import styles from './Dashboard.module.css'

import LogoTop from '../components/dashboard/LogoTop';
import Menu from '../components/dashboard/Menu'
import HomeScreen from '../components/dashboard/HomeScreen';
import BarTop from '../components/dashboard/BarTop';

import useUser from '../hooks/useUse';

import { useState, useEffect } from 'react';

export default function Dashboard() {

	const {getInfoUser, user} = useUser()

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
	}, [])

	useEffect(() => {
		getInfoUser()
	}, [])

	const handleMenuDesktop = () => {
		console.log("Clicou no desktop")
	}

	const hamburguerMobile = () => {
		document.body.style.overflow = menu ? "hidden" : "initial"
		setMenu(!menu)
	}

	return (
		<div className={styles.container}>
			<LogoTop />
			<BarTop handleMenuDesktop={handleMenuDesktop} hamburguerMobile={hamburguerMobile} name={user.name} status="Online"/>
			<Menu activedMenu={menu} name={user.name} status="Online" />
			<HomeScreen name={user.name}/>
		</div>
	)
}
