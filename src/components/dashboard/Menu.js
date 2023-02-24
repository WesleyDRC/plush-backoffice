import './Menu.module.css'

import styles from './Menu.module.css'
import User from './User'
import ItemList from './ItemList'

import useMenu from '../../hooks/useMenu'


export default function Menu({ name, status}) {

	const {menu} = useMenu()

	return (
		<div className={ menu ? styles.menuInitial : styles.menuMobile} id="asideMenu">
			<User name={name} status={status} />
			<header> MENU </header>
			<ul className={styles.list}>
				<ItemList destiny="/dashboard" imageUrl="https://imgur.com/U8T4mCM.png" alt="Tela inicial" name="Tela Inicial" />
				<ItemList destiny="/dashboard/users" imageUrl="https://imgur.com/s6mkqLY.png" alt="Usuários" name="Usuários" />
				<ItemList imageUrl="https://imgur.com/YXpP5L1.png" alt="Pedidos" name="Pedidos" />
				<ItemList destiny="/dashboard/stock" imageUrl="https://i.imgur.com/gOxGdqm.png" alt="Estoque" name="Estoque" />
			</ul>
		</div>
	)
}
