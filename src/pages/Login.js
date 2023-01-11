import styles from './Login.module.css'
import LogoAside from "../components/login/LogoAside";
import FormLogin from "../components/login/FormLogin";

export default function Login() {
	return (
		<div className={styles.container}>
			<LogoAside />
			<FormLogin />
		</div>
	)
}
