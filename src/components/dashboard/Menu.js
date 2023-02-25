import "./Menu.module.css";

import styles from "./Menu.module.css";
import User from "./User";
import ItemList from "./ItemList";

import useMenu from "../../hooks/useMenu";
import useUser from "../../hooks/useUser";

export default function Menu() {
  const {
    menu,
    activeDashboardHome,
    activeDashboardUsers,
		activeDashboardOrder,
    activeDashboardStock,
  } = useMenu();
  const { user } = useUser();

  return (
    <div
      className={menu ? styles.menuInitial : styles.menuMobile}
      id="asideMenu"
    >
      <User name={user.name} status="Online" />
      <header> MENU </header>
      <ul className={styles.list}>
        <ItemList
          destiny="/dashboard"
          imageUrl="https://imgur.com/U8T4mCM.png"
          alt="Tela inicial"
          name="Tela Inicial"
          active={activeDashboardHome}
        />
        <ItemList
          destiny="/dashboard/users"
          imageUrl="https://imgur.com/s6mkqLY.png"
          alt="Usuários"
          name="Usuários"
          active={activeDashboardUsers}
        />
        <ItemList
          imageUrl="https://imgur.com/YXpP5L1.png"
          alt="Pedidos"
          name="Pedidos"
          active={activeDashboardOrder}
        />
        <ItemList
          destiny="/dashboard/stock"
          imageUrl="https://i.imgur.com/gOxGdqm.png"
          alt="Estoque"
          name="Estoque"
          active={activeDashboardStock}
        />
      </ul>
    </div>
  );
}
