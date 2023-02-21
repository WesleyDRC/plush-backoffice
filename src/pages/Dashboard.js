import styles from './Dashboard.module.css'

import LogoTop from '../components/dashboard/LogoTop';
import Menu from '../components/dashboard/Menu'
import HomeScreen from '../components/dashboard/HomeScreen';
import BarTop from '../components/dashboard/BarTop';

import useUser from '../hooks/useUse';
import useAuth from '../hooks/useAuth';

import { useState, useEffect } from 'react';

export default function Dashboard() {

	const [amountCustomers, setAmountCustomers] = useState([])
	const {getInfoUser, user, getAllUsers} = useUser()
	const {authenticated} = useAuth()

	useEffect(() => {
		getInfoUser()
	}, [authenticated])

	useEffect(() => {
		getAllUsers().then((response) => {
			setAmountCustomers(response.data.length)
		})
	}, [])



	return (
		<div className={styles.container}>
			<LogoTop />
			<BarTop screen={"Tela inicial"} name={user.name} status="Online"/>
			<Menu  name={user.name} status="Online" />
			<HomeScreen name={user.name} amountCustomers={amountCustomers}/>
		</div>
	)
}
