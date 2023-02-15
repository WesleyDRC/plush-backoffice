import styles from './Home.module.css'
import LogoAside from "../components/login/LogoAside";
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className={styles.container}>
      <LogoAside />
			<div className={styles.enterDashboard}>
				<div className={styles.image}>
					<img src="https://i.imgur.com/TEZ4tta.png" alt="Imagem ao lado do formulário de Login" />
				</div>
				<div className={styles.enter}>
					<h1> LOUCO POR PELUCIAS </h1>
					<button className={styles.btn}> <Link to="/login"> INICIAR ANÁLISE </Link> </button>
				</div>
			</div>
    </div>
  );
}
