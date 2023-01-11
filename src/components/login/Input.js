import styles from './Input.module.css'

export default function Input({forLabel, text, type, name}) {
	return (
		<div className={styles.inputBox}>
			<label htmlFor={forLabel}>
				<div className={styles.inputField}>
					<p> {text} </p>
					<input type={type} name={name} />
				</div>
			</label>
		</div>
	)
}
