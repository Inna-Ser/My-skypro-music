import { NavLink, useLocation } from "react-router-dom";
import { menu } from "../../../utils/menu";
import styles from "./Menu.module.css";
import { useState } from "react";
import { useThemeContext } from "../../../themesComponent/ThemesComponent";
import classNames from "classnames";

const MenuItem = (props) => {
  const { theme } = useThemeContext();
  return (
    <li className={styles.menuListItem}>
      <NavLink
        className={classNames(styles.menuLink, styles[theme.mode], {
          [styles.active]: props.isActive,
        })}
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
  const { theme, toggleTheme } = useThemeContext();

  const handleClick = () => {
    toggleTheme(theme);
  };

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
        <button className={styles.menuButtonChangeTheme} onClick={handleClick}>
          <img
            src={
              theme.mode === "dark"
                ? "/img/icon/dark.svg"
                : "/img/icon/light.svg"
            }
            alt="cheng_theme"
            style={{ cursor: "pointer" }}
          />
        </button>
      </ul>
    </div>
  );
};
