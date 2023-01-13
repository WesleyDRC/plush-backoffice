import styles from './ItemList.module.css'

export default function ItemList({imageUrl, name}) {
	return (
		<li className={styles.itemList}>
				<img src={imageUrl} alt="Logo tela inicial" />
				<span>{name}</span>
		</li>
	)
}
