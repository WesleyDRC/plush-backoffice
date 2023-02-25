import styles from './Dashboard.module.css'

import LogoTop from '../components/dashboard/LogoTop';
import Menu from '../components/dashboard/Menu'
import HomeScreen from '../components/dashboard/HomeScreen';
import BarTop from '../components/dashboard/BarTop';

import { useEffect } from 'react';
import useMenu from '../hooks/useMenu';

export default function Dashboard() {

	const {selectedItemDashboard} = useMenu()

	useEffect(() => {
		selectedItemDashboard("dashboardHome")
	}, [selectedItemDashboard])

	return (
		<div className={styles.container}>
			<LogoTop />
			<BarTop screen={"Tela inicial"} />
			<Menu />
			<HomeScreen />
		</div>
	)
}
