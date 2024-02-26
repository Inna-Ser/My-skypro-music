import { useState } from "react";
import { menu } from "../../utils/menu";
import { BurgerLine } from "../burgerLine/BurgerLine";
import { Menu } from "../menu/Menu";
import "./navigator.css";

export const Navigation = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div onClick={toggleVisibility} className="nav__burger burger">
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </div>
      {visible && <Menu link={menu.link} title={menu.title} />}
    </nav>
  );
}
