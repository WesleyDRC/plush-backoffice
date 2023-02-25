import styles from "./UserTr.module.css"

export default function UserTr({ name, email, user}) {
	return (
		<tr className={styles.userTr} data_user={JSON.stringify(user)}>
			<td>{name}</td>
			<td> {email}</td>
			<td className={styles.buttons}>
				<button className={styles.editUser}> EDITAR </button>
				<button className={styles.changePassword}> ALTERAR SENHA </button>
				<button className={styles.delete}> EXCLUIR </button>
			</td>
		</tr>

	)
}
