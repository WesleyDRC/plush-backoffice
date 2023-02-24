import styles from './ModalCreateProduct.module.css'
import { useState } from 'react'
import useProduct from '../../hooks/useProduct'

export default function ModalCreateProduct() {

	const [imageProduct, setImageProduct] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [colorProduct, setColorProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [categoryProduct, setCategoryProduct] = useState("");
  const [inventoryProduct, setInventoryProduct] = useState("");
  const [discountProduct, setDiscountProduct] = useState("");
  const [error, setError] = useState("");

	const {
		createProduct,
		modalCreate,
		handleModalCreate
	} = useProduct()

  const submit = async (e) => {
    e.preventDefault();

    const response = await createProduct({
			imageUrl: imageProduct,
			name: nameProduct,
			description: descriptionProduct,
			color: colorProduct,
			price: priceProduct,
			category: categoryProduct,
			inventory: inventoryProduct,
			discount: discountProduct
		})

    if (response) {
			setError(response)
      return;
    }

		window.location.reload()

  }

	return (
		<div className={modalCreate ? styles.modalCreate : styles.modalCreateFalse}>
			<form onSubmit={(e) => submit(e)}>
				<div className={styles.inputBox}>
					<label htmlFor="image">
						<input type="text" placeholder="URL da imagem" name="image"
						value={imageProduct}
						onChange={(e) => [setImageProduct(e.target.value)]}
						/>
					</label>
				</div>
				<div className={styles.inputBox}>
					<label htmlFor="name">
						<input type="text" placeholder="Nome" name="name"
						value={nameProduct}
						onChange={(e) => [setNameProduct(e.target.value)]}
						/>
					</label>
				</div>
				<div className={styles.inputBox}>
					<label htmlFor="description">
						<input type="text" placeholder="Descrição" name="description"
								value={descriptionProduct}
							onChange={(e) => [setDescriptionProduct(e.target.value)]}
						/>
					</label>
				</div>
				<div className={styles.inputBox}>
					<label htmlFor="color">
						<input type="text" placeholder="Cor" name="color"
						value={colorProduct}
							onChange={(e) => [setColorProduct(e.target.value)]}
						/>
					</label>
				</div>
				<div className={styles.inputBox}>
					<label htmlFor="price">
						<input type="text" placeholder="Preço" name="price"
						value={priceProduct}
							onChange={(e) => [setPriceProduct(e.target.value)]}
						/>
					</label>
				</div>
				<div className={styles.inputBox}>
					<label htmlFor="category">
						<input type="text" placeholder="Categoria" name="category"
								value={categoryProduct}
							onChange={(e) => [setCategoryProduct(e.target.value)]}
						/>
					</label>
				</div>
				<div className={styles.inputBox}>
					<label htmlFor="inventory">
						<input type="text" placeholder="Inventário" name="inventory"
							value={inventoryProduct}
							onChange={(e) => [setInventoryProduct(e.target.value)]}
						/>
					</label>
				</div>
				<div className={styles.inputBox}>
					<label htmlFor="discount">
						<input type="text" placeholder="Desconto" name="discount"
							value={discountProduct}
							onChange={(e) => [setDiscountProduct(e.target.value)]}
						/>
					</label>
				</div>
				<label className={styles.error}> {error} </label>

				<div className={styles.btn}>
						<button type="submit" className={styles.btnEdit}>CRIAR</button>
						<button type="button" className={styles.btnCancel} onClick={handleModalCreate}>CANCELAR</button>
					</div>
			</form>
		</div>
	)
}
