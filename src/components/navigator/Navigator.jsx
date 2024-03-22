import { useState } from "react";
import { menu } from "../../utils/menu";
import { BurgerLine } from "../burgerLine/BurgerLine";
import { Menu } from "./menu/Menu";
import classNames from "classnames";
import styles from "./Navigator.module.css";

export const Navigator = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <nav className={classNames(styles.mainNav, styles.nav)}>
      <div className={classNames(styles.navLogo, styles.logo)}>
        <img className={styles.logoImage} src="/img/logo.png" alt="logo" />
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
