import styles from './BarTop.module.css'
import User from './User'

export default function BarTop({hamburguerMobile, handleMenuDesktop, name, status}) {

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
					Tela Inicial
				</header>
			</div>
			<User name={name} status={status}/>
		</header>
	)
}
