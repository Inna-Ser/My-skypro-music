import { NavLink } from "react-router-dom";
import styles from "./Personal.module.css";

export const Personal = () => {
  return (
    <div className={styles.sidebarPersonal}>
      <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
      <NavLink className={styles.sidebarIcon} to="/login">
        <svg alt="logout">
          <use xlinkHref="img/icon/sprite.svg#logout"></use>
        </svg>
      </NavLink>
    </div>
  );
};
