import styles from './Menu.module.css'
import User from './User'
import ItemList from './ItemList'

import './Menu.module.css'

export default function Menu({activedMenu, name, status}) {
	return (
		<div className={ activedMenu ? styles.menuInitial : styles.menuMobile} id="asideMenu">
			<User name={name} status={status} />
			<header> MENU </header>
			<ul className={styles.list}>
				<ItemList imageUrl="https://imgur.com/U8T4mCM.png" name="Tela Inicial" />
				<ItemList imageUrl="https://imgur.com/s6mkqLY.png" name="Usuários" />
				<ItemList imageUrl="https://imgur.com/YXpP5L1.png" name="Pedidos" />
			</ul>
		</div>
	)
}
