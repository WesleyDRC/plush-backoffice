import styles from './Login.module.css'
import LogoAside from "../components/login/LogoAside";
import FormLogin from "../components/login/FormLogin";

import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Login() {

	const navigate = useNavigate()
	const {authenticated} = useAuth()

	useEffect(() => {
		if(authenticated) {
			navigate("/");
		}
	}, [authenticated])

	return (
		<div className={styles.container}>
			<LogoAside />
			<FormLogin />
		</div>
	)
}
