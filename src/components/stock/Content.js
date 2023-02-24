import styles from './Content.module.css'
import Product from './Product'
import useProduct from '../../hooks/useProduct'

export default function ContentStock({ products }) {

	const {addProduct} = useProduct()

	return  (
		<main className={styles.ContentStock}>
			<header>
				<div className={styles.tile}>
					<h2> Produtos </h2>
				</div>
				<div className={styles.createProduct}>
					<button onClick={addProduct}> Criar produto </button>
				</div>

			</header>
			<section className={styles.products}>
				<table className={styles.table}>
					<thead>
						<tr className={styles.title}>
							<th className={styles.name}> Nome </th>
							<th className={styles.quantity}> Quantidade</th>
							<th className={styles.action}> Ação</th>
						</tr>
					</thead>

					<tbody className={styles.tbody}>
						{ products.length > 0 ?
						products.map((item) => (
							<Product key={item.id} imageUrl={item.imageUrl} alt={item.name} name={item.name} quantity={item.inventory.quantity} product={item}/>
						)) : (
							<tr >
								<td colsSpan={2} className={styles.notfound}> Não há produtos em estoque </td>
							</tr>
						)}
					</tbody>


				</table>
			</section>
		</main>
	)
}
