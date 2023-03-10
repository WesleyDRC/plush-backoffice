import BarTop from '../components/dashboard/BarTop'
import LogoTop from '../components/dashboard/LogoTop'
import Menu from '../components/dashboard/Menu'
import styles from './Users.module.css'
import ContentUsers from '../components/users/ContentUsers'
import ModalCreateUser from '../components/users/ModalCreateUser'

import { useEffect } from 'react';
import useMenu from '../hooks/useMenu';

export default function Users() {

	const {selectedItemDashboard} = useMenu()

	useEffect(() => {
		selectedItemDashboard("dashboardUsers")
	}, [selectedItemDashboard])

	return (
		<div className={styles.container}>
			<LogoTop />
			<BarTop screen={"Estoque"} />
			<Menu />
			<ContentUsers />
			<ModalCreateUser />
		</div>
	)
}
