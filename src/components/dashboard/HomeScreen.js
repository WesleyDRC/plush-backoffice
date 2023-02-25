import Card from './Card'
import styles from './HomeScreen.module.css'
import useUser from '../../hooks/useUser'

import { useEffect, useState } from 'react'

export default function HomeScreen() {

	const [amountCustomers, setAmountCustomers] = useState([])

	const {user, getAllUsers} = useUser()

	useEffect(() => {
		getAllUsers().then((response) => {
			setAmountCustomers(response.data.length)
		})
	}, [])

	return (
		<main className={styles.HomeScreen}>
			<section className={styles.welcome}>
				<div className={styles.phrase}>
					<p> Hello, {user.name}</p>
					<p> Have an excellent day!</p>
				</div>
				<div className={styles.image}>
					<img src="https://imgur.com/5eYUylz.png" alt="Imagem de um boneco em frente ao computador" />
				</div>
			</section>

			<section className={styles.cards}>
				<Card name="Vendas" imageUrl="https://imgur.com/qITPTRI.png" quantity="257"/>
				<Card name="Contatos" imageUrl="https://imgur.com/cus86RR.png" quantity="255"/>
				<Card name="Clientes" imageUrl="https://imgur.com/6t0y1h9.png" quantity={amountCustomers} />
			</section>
		</main>
	)
}
