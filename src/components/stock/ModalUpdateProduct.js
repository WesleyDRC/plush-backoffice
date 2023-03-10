import styles from './ModalUpdateProduct.module.css'
import { useState } from 'react'
import useProduct from '../../hooks/useProduct'

export default function ModalUpdateProduct() {

  const [error, setError] = useState("");

	const {
		modalUpdate,
		updateProduct,
		handleModalUpdate,
		idProduct,
		imageProduct,
		nameProduct,
		descriptionProduct,
		colorProduct,
		priceProduct,
		categoryProduct,
		inventoryProduct,
		discountProduct,
		setNameProduct,
		setDescriptionProduct,
		setColorProduct,
		setPriceProduct,
		setCategoryProduct,
		setInventoryProduct,
		setDiscountProduct
	} = useProduct()

  const submit = async (e) => {
    e.preventDefault();

    const response = await updateProduct({
			id: idProduct,
			name: nameProduct,
			description: descriptionProduct,
			color: colorProduct,
			price: priceProduct,
			category: categoryProduct,
			inventory: inventoryProduct,
			discount: discountProduct
		})

    if (response) {
      setError(response);
      return;
    }

		window.location.reload()

  }

	return (
		<div className={modalUpdate ? styles.modalUpdate : styles.modalUpdateFalse}>
			<div className={styles.productImage}>
				<div>
					<img src={imageProduct} alt="Imagem do produto" />
				</div>
			</div>

			<form onSubmit={(e) => submit(e)}>
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
						<button type="submit" className={styles.btnEdit}>EDITAR</button>
						<button type="button" className={styles.btnCancel} onClick={handleModalUpdate}>CANCELAR</button>
					</div>
			</form>
		</div>
	)
}
