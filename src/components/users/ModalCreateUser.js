import styles from './ModalCreateUser.module.css'
import { useState } from 'react'
import useUser from '../../hooks/useUser'
import useAuth from '../../hooks/useAuth';

export default function ModalCreateUser() {

	const [nameUser, setNameUser] = useState("");
	const [emailUser, setEmailUser] = useState("");
	const [passwordUser, setPasswordUser] = useState("");
  const [error, setError] = useState("");

	const {
		modalCreate,
		handleModalCreate
	} = useUser()

	const {SignUp} = useAuth()

  const submit = async (e) => {
    e.preventDefault();

    const response = await SignUp({
			email: emailUser,
			name: nameUser,
			password: passwordUser
		})

    if (response) {
			setError(response)
      return;
    }

		window.location.reload()

  }

	return (
		<div className={modalCreate ? styles.modalCreate : styles.modalCreateFalse}>
			<form onSubmit={(e) => submit(e)}>
				<div className={styles.inputBox}>
					<label htmlFor="name">
						<input type="text" placeholder="Nome" name="name"
						value={nameUser}
						onChange={(e) => [setNameUser(e.target.value)]}
						/>
					</label>
				</div>
				<div className={styles.inputBox}>
					<label htmlFor="email">
						<input type="text" placeholder="Email" name="email"
						value={emailUser}
						onChange={(e) => [setEmailUser(e.target.value)]}
						/>
					</label>
				</div>
				<div className={styles.inputBox}>
					<label htmlFor="password">
						<input type="password" placeholder="Senha" name="password"
						value={passwordUser}
						onChange={(e) => [setPasswordUser(e.target.value)]}
						/>
					</label>
				</div>

				<label className={styles.error}> {error} </label>

				<div className={styles.btn}>
						<button type="submit" className={styles.btnEdit}>CRIAR</button>
						<button type="button" className={styles.btnCancel} onClick={handleModalCreate}>CANCELAR</button>
					</div>
			</form>
		</div>
	)
}
