import { NavLink } from "react-router-dom";
import styles from "./Personal.module.css";
import { useContext } from "react";
import { UserContext } from "../../../userContext";

export const Personal = () => {
  const { user } = useContext(UserContext);
  return (
    <div className={styles.sidebarPersonal}>
      <p className={styles.sidebarPersonalName}>{user.username}</p>
      <NavLink className={styles.sidebarIcon} to="/login">
        <svg alt="logout">
          <use xlinkHref="img/icon/sprite.svg#logout"></use>
        </svg>
      </NavLink>
    </div>
  );
};
