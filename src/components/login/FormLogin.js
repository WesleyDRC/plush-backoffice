import styles from './FormLogin.module.css'
import Input from './Input'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function FormLogin() {

	const {SignIn } = useAuth()
	const navigate = useNavigate()

	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!email | !password) {
      setError("Preencha todos os campos");
      return;
    }
    const response = await SignIn(email, password);
    if (response) {
      setError(response);
      return;
    }

    navigate("/dashboard");
  }

	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<img src="https://i.imgur.com/TEZ4tta.png" alt="Imagem ao lado do formulário de Login" />
			</div>

			<div className={styles.formLogin}>
				<form onSubmit={(e) => submit(e)}>
					<header>
						<h1> LOUCO POR PELUCIAS </h1>
					</header>
					<div className={styles.inputs}>
						<Input
							forLabel="email"
							text="Email / Usuário"
							type="text"
							name="email"
							value={email}
							onChange={(e) => [setEmail(e.target.value), setError("")]}
						/>
						<Input
							forLabel="password"
							text="Senha"
							type="password"
							name="password"
							value={password}
							onChange={(e) => [setPassword(e.target.value), setError("")]}
						/>
					</div>
					<label className={styles.labelError}> {error} </label>
					<div className={styles.btn}>
						<button type="submit" className={styles.btnSend}>ENTRAR</button>
					</div>
				</form>
			</div>
		</div>
	)
}
