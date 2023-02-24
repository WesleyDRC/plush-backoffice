import styles from './Home.module.css'
import LogoAside from "../components/login/LogoAside";
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import useAuth from '../hooks/useAuth';

export default function Home() {

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
			<div className={styles.enterDashboard}>
				<div className={styles.image}>
					<img src="https://i.imgur.com/TEZ4tta.png" alt="Imagem ao lado do formulário de Login" />
				</div>
				<div className={styles.enter}>
					<h1> LOUCO POR PELUCIAS </h1>
					<button className={styles.btn}> <Link to="/dashboard"> INICIAR ANÁLISE </Link> </button>
				</div>
			</div>
    </div>
  );
}
