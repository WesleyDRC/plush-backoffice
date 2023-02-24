import BarTop from '../components/dashboard/BarTop'
import LogoTop from '../components/dashboard/LogoTop'
import Menu from '../components/dashboard/Menu'
import styles from './Users.module.css'
import ContentUsers from '../components/users/ContentUsers'

export default function Users() {
	return (
		<div className={styles.container}>
			<LogoTop />
			<BarTop screen={"Estoque"} />
			<Menu />
			<ContentUsers />
		</div>
	)
}
