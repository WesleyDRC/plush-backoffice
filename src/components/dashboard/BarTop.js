import styles from './BarTop.module.css'
import User from './User'

export default function BarTop() {
	return (
		<header className={styles.barTop}>
			<div className={styles.menu}>
				<div className={styles.hamburguer}>
					<div></div>
					<div></div>
					<div></div>
				</div>

				<header>
					Tela Inicial
				</header>
			</div>
			<User />
		</header>
	)
}
