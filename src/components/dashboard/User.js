import styles from './User.module.css'

export default function User(name, status) {
	return (
		<div className={styles.user}>
			<div className={styles.logoUser}>
				<img src="https://imgur.com/qEWyIPc.png" alt="Imagem do usuário" />
			</div>
			<div className={styles.information}>
				<p className={styles.name}> Wesley Luis</p>
				<p className={styles.status}> <span className={styles.statusBol}></span> Online </p>
			</div>
		</div>
	)
}
