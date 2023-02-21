import styles from './BarTop.module.css'
import User from './User'

import useMenu from '../../hooks/useMenu'

export default function BarTop({screen, name, status}) {

	const {handleMenuDesktop, hamburguerMobile} = useMenu()

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
			<User name={name} status={status}/>
		</header>
	)
}
