import styles from './FormLogin.module.css'
import Input from './Input'

export default function FormLogin() {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<img src="https://i.imgur.com/TEZ4tta.png" alt="Imagem ao lado do formulário de Login" />
			</div>

			<div className={styles.formLogin}>
				<form>
					<header>
						<h1> LOUCO POR PELUCIAS </h1>
					</header>
					<div className={styles.inputs}>
						<Input forLabel="emailOrUser" text="Email / Usuário" type="text" name="emailOrUser"/>
						<Input forLabel="password" text="Senha" type="password" name="password"/>
					</div>
					<div className={styles.btn}>
						<button type="submit" className={styles.btnSend}>ENTRAR</button>
					</div>
				</form>
			</div>
		</div>
	)
}
