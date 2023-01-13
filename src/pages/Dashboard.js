import styles from './Dashboard.module.css'

import LogoTop from '../components/dashboard/LogoTop';
import Menu from '../components/dashboard/Menu'
import HomeScreen from '../components/dashboard/HomeScreen';
import BarTop from '../components/dashboard/BarTop';

export default function Dashboard() {
	return (
		<div className={styles.container}>
			<LogoTop />
			<BarTop />
			<Menu />
			<HomeScreen />
		</div>
	)
}
