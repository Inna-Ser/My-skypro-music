import { NavLink, useLocation } from "react-router-dom";
import { menu } from "../../../utils/menu";
import styles from "./Menu.module.css";
import { useState } from "react";

const MenuItem = (props) => {
  return (
    <li className={styles.menuListItem}>
      <NavLink
        className={props.isActive ? styles.active : styles.menuLink}
        to={props.link}
        exact
      >
        {props.title}
      </NavLink>
    </li>
  );
};

export const Menu = () => {
  const location = useLocation();
  const [curentPage, setCurentPage] = useState(location.pathname);

  return (
    <div className={styles.navigatorMenu}>
      <ul className={styles.menuList}>
        {menu.map((item, index) => (
          <MenuItem
            key={index}
            link={item.link}
            title={item.title}
            isActive={curentPage === item.link}
          />
        ))}
      </ul>
    </div>
  );
};
