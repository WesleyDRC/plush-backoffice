import styles from './ContentStock.module.css'
import Product from './Product'
import useProduct from '../../hooks/useProduct'

export default function ContentStock({ products }) {

	const {modalCreate, modalUpdate, addProduct} = useProduct()

	return  (
		<main className={modalCreate || modalUpdate ? styles.contentStockOpacity : styles.contentStock}>
			<header>
				<div className={styles.title}>
					<h2> Produtos </h2>
				</div>
				<div className={styles.createProduct}>
					<button onClick={addProduct}>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9 15H11V11H15V9H11V5H9V9H5V11H9V15ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z" fill="white"/>
						</svg>
							NOVO PRODUTO
					</button>
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
								<td className={styles.notfound}> Não há produtos em estoque </td>
							</tr>
						)}
					</tbody>


				</table>
			</section>
		</main>
	)
}
