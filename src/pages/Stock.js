import styles from './Stock.module.css'

import BarTop from "../components/dashboard/BarTop";
import LogoTop from "../components/dashboard/LogoTop";
import Menu from "../components/dashboard/Menu";
import ContentStock from '../components/stock/ContentStock';

import ModalUpdateProduct from '../components/stock/ModalUpdateProduct';
import ModalCreateProduct from '../components/stock/ModalCreateProduct';

import useUser from '../hooks/useUse';
import useAuth from '../hooks/useAuth';

import { useEffect, useState} from 'react';

import AxiosRepository from '../repository/AxiosRepository';

export default function Stock() {

	const {getInfoUser, user} = useUser()
	const {authenticated} = useAuth()

	const [products, setProducts] = useState([])

	useEffect(() => {
		getInfoUser()
	}, [authenticated])

	useEffect(() => {
		AxiosRepository.findAllProducts().then((resp) => {
			setProducts(resp.data)
		})
	}, [])

	return(
		<div className={styles.container}>
			<LogoTop />
			<BarTop screen={"Estoque"} name={user.name} status="Online"/>
			<Menu name={user.name} status="Online" />
			<ContentStock products={products} />
			<ModalUpdateProduct />
			<ModalCreateProduct />
		</div>
	)
}
