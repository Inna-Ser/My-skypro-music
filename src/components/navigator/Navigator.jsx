import { useState } from "react";
import { menu } from "../../utils/menu";
import { BurgerLine } from "./burgerLine/BurgerLine";
import { Menu } from "./menu/Menu";
import classNames from "classnames";
import styles from "./Navigator.module.css";
import { useThemeContext } from "../../themesComponent/ThemesComponent";

export const Navigator = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => setVisible(!visible);
  const { theme } = useThemeContext();

  return (
    <nav className={theme.mode === "dark" ? styles.mainNav : styles.light}>
      <div className={classNames(styles.navLogo, styles.logo)}>
        <img
          className={styles.logoImage}
          src={theme.mode === "dark" ? "/img/logo.png" : "/img/logo_modal.png"}
          alt="logo"
        />
      </div>{" "}
      <div
        onClick={toggleVisibility}
        className={classNames(styles.navBurger, styles.burger)}
      >
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </div>
      {visible && <Menu link={menu.link} title={menu.title} />}
    </nav>
  );
};
