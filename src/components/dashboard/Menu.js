import styles from './Menu.module.css'
import User from './User'
import ItemList from './ItemList'

export default function Menu() {
	return (
		<div className={styles.menu}>
			<User />
			<header> MENU </header>
			<ul className={styles.list}>
				<ItemList imageUrl="https://imgur.com/U8T4mCM.png" name="Tela Inicial" />
				<ItemList imageUrl="https://imgur.com/s6mkqLY.png" name="Usuários" />
				<ItemList imageUrl="https://imgur.com/YXpP5L1.png" name="Pedidos" />
			</ul>
		</div>
	)
}
