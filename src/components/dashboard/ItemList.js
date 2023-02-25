import styles from './ItemList.module.css'
import {Link} from 'react-router-dom'

export default function ItemList({destiny,imageUrl, alt, name, active}) {
	return (
		<Link to={destiny}>
			<li className={active ? styles.itemListSelected : styles.itemList }>
					<img src={imageUrl} alt={alt} />
					<span>{name}</span>
			</li>
		</Link>

	)
}
