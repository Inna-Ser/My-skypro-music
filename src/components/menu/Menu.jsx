import { NavLink, useLocation } from "react-router-dom";
import { menu } from "../../utils/menu";
import styles from "./Menu.module.css";
import "./menu.css";
import classNames from "classnames";

const MenuItem = (props) => {
  return (
    <li className={styles.menuListItem}>
      <NavLink className={styles.menuLink} to={props.link} exact>
        {props.title}
      </NavLink>
    </li>
  );
};

export const Menu = () => {
  return (
    <div className={styles.navigatorMenu}>
      <ul className={styles.menuList}>
        {menu.map((item, index) => (
          <MenuItem key={index} link={item.link} title={item.title} />
        ))}
      </ul>
    </div>
  );
};
