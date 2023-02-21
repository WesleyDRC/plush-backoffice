import styles from './Content.module.css'
import Product from './Product'

export default function ContentStock({ products, editProduct, deleteProduct }) {
	return  (
		<main className={styles.ContentStock}>
			<header>
				<h2> Produtos </h2>
			</header>
			<section className={styles.products}>
				<table className={styles.table}>
					<tr className={styles.title}>
						<th className={styles.name}> Nome </th>
						<th className={styles.quantity}> Quantidade</th>
						<th className={styles.action}> Ação</th>
					</tr>
					{ products.length > 0&&
					products.map((item) => (
						<Product key={item.id} name={item.name} quantity={item.inventory.quantity} editProduct={editProduct} deleteProduct={deleteProduct} product={item}/>
					))}

				</table>
			</section>
		</main>
	)
}
