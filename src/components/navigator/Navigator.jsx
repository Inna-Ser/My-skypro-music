import { menu } from "../../utils/menu";
import { Menu } from "../menu/Menu";
import "./navigator.css";

function BurgerLine() {
  return <span className="burger__line"></span>;
}

export function Navigation() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger">
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </div>
      <Menu link={menu.link} title={menu.title} />
    </nav>
  );
}
