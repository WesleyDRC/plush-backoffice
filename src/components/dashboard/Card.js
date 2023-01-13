import styles from './Card.module.css'

export default function Card({name, imageUrl, quantity}) {
	return (
		<div className={styles.card}>
			<header>
				<h2> {name} </h2>
			</header>
			<div className={styles.information}>
				<div className={styles.icon}>
					<img src={imageUrl} alt="Ícone" />
				</div>
				<div className={styles.value}>
					<p> {quantity} </p>
				</div>
			</div>
		</div>
	)
}
