import styles from './BarTop.module.css'
import User from './User'

import useMenu from '../../hooks/useMenu'
import useUser from '../../hooks/useUser'

export default function BarTop({screen}) {

	const {handleMenuDesktop, hamburguerMobile} = useMenu()
	const {user} = useUser()

	return (
		<header className={styles.barTop}>
			<div className={styles.menu}>
				<div className={styles.hamburguerDesktop} onClick={handleMenuDesktop}>
					<div></div>
					<div></div>
					<div></div>
				</div>

				<div className={styles.hamburguerMobile} onClick={hamburguerMobile}>
					<div></div>
					<div></div>
					<div></div>
				</div>

				<header>
					{screen}
				</header>
			</div>
			<User name={user.name} status="Online"/>
		</header>
	)
}
