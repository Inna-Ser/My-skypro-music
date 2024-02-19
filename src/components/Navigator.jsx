import { menu } from "../utils/menu";

function MenuItem(props) {
  return (
    <li className="menu__item">
      <a href={props.link} className="menu__link">
        {props.title}
      </a>
    </li>
  );
}

function Menu() {
  return (
    <div className="nav__menu menu">
      <ul className="menu__list">
        {menu.map((item) => (
          <MenuItem link={item.link} title={item.title} />
        ))}
      </ul>
    </div>
  );
}
export function Navigation() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger">
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <Menu link={menu.link} title={menu.title} />
    </nav>
  );
}
