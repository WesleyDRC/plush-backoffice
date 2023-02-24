import AxiosRepository from "../repository/AxiosRepository";

import { createContext, useState } from "react";

export const ProductsContext = createContext({})

export const ProductsProvider = ({children}) => {

	const [modal, setModal] = useState(false)

	// name, description, cor, price, category, inventory, discount
	const [idProduct, setIdProduct] = useState("")
	const [imageProduct, setImageProduct] = useState("")
	const [nameProduct, setNameProduct] = useState("")
	const [descriptionProduct, setDescriptionProduct] = useState("")
	const [colorProduct, setColorProduct] = useState("")
	const [priceProduct, setPriceProduct] = useState("")
	const [categoryProduct, setCategoryProduct] = useState("")
	const [inventoryProduct, setInventoryProduct] = useState("")
	const [discountProduct, setDiscountProduct] = useState("")



	const handleModalUpdate = () => {
		setModal(!modal)
	}

	const editProduct = (e) => {
		if(!modal) {
			handleModalUpdate()
		}
		const tr = e.target.parentNode.parentNode
		const dataProduct = JSON.parse(tr.getAttribute('data_product'))

		setIdProduct(dataProduct.id)
		setImageProduct(dataProduct.imageUrl)
		setNameProduct(dataProduct.name)
		setDescriptionProduct(dataProduct.description)
		setColorProduct(dataProduct.color)
		setPriceProduct(dataProduct.price)
		setCategoryProduct(dataProduct.categories_id)
		setInventoryProduct(dataProduct.inventory_id)
		setDiscountProduct(dataProduct.discount_id)
	}

	const updateProduct = async ({id, name, description, color, price, category, inventory, discount}) => {
		try {
			await AxiosRepository.updateProduct({
				id, name, description, color, price, category, inventory, discount
			})
		} catch (error) {
			console.log(error)
			return error
		}
	}

	const deleteProduct = (e) => {
		const tr = e.target.parentNode.parentNode
		const dataProduct = JSON.parse(tr.getAttribute('data_product'))
		if(window.confirm(`Deseja mesmo excluir o produto ${dataProduct.name}?`) ) {
			AxiosRepository.deleteProduct(dataProduct.id).then(() => {
				window.location.reload()
			})
		}
	}

	return (
		<ProductsContext.Provider
			value={{
				handleModalUpdate,
				modal,
				editProduct,
				updateProduct,
				deleteProduct,
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
			}}
		>
			{children}
		</ProductsContext.Provider>
	)
}
