import styles from './Input.module.css'

export default function Input({forLabel, text, type, name, value, onChange}) {
	return (
		<div className={styles.inputBox}>
			<label htmlFor={forLabel}>
				<div className={styles.inputField}>
					<p> {text} </p>
					<input type={type} name={name} value={value} onChange={onChange}/>
				</div>
			</label>
		</div>
	)
}
