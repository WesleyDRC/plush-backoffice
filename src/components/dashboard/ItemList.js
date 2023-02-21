import styles from './ItemList.module.css'
import {Link} from 'react-router-dom'

export default function ItemList({destiny,imageUrl, alt, name}) {
	return (
		<Link to={destiny}>
			<li className={styles.itemList}>
					<img src={imageUrl} alt={alt} />
					<span>{name}</span>
			</li>
		</Link>

	)
}
