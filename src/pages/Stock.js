import styles from './Stock.module.css'

import BarTop from "../components/dashboard/BarTop";
import LogoTop from "../components/dashboard/LogoTop";
import Menu from "../components/dashboard/Menu";
import ContentStock from '../components/stock/Content';

import useUser from '../hooks/useUse';
import useAuth from '../hooks/useAuth';

import { useEffect, useState} from 'react';

import AxiosRepositoty from '../repository/AxiosRepositoty';

export default function Stock() {

	const {getInfoUser, user} = useUser()
	const {authenticated} = useAuth()

	const [products, setProducts] = useState([])

	useEffect(() => {
		getInfoUser()
	}, [authenticated])

	useEffect(() => {
		AxiosRepositoty.findAllProducts().then((resp) => {
			setProducts(resp.data)
		})
	}, [])

	const editProduct = (e) => {
		const tr = e.target.parentNode.parentNode

	}

	const deleteProduct = (e) => {
		const tr = e.target.parentNode.parentNode
		const dataProduct = JSON.parse(tr.getAttribute('data_product'))
		if(window.confirm(`Deseja mesmo excluir o produto ${dataProduct.name}?`) ) {
			AxiosRepositoty.deleteProduct(dataProduct.id).then(() => {
				window.location.reload()
			})
		}
	}

	return(
		<div className={styles.container}>
			<LogoTop />
			<BarTop screen={"Estoque"} name={user.name} status="Online"/>
			<Menu name={user.name} status="Online" />
			<ContentStock products={products} editProduct={editProduct} deleteProduct={deleteProduct}/>
		</div>
	)
}
