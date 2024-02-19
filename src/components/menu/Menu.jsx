import { menu } from "../../utils/menu";
import "./menu.css";

function MenuItem(props) {
  return (
    <li className="menu__item">
      <a href={props.link} className="menu__link">
        {props.title}
      </a>
    </li>
  );
}

export function Menu() {
  return (
    <div className="nav__menu menu">
      <ul className="menu__list">
        {menu.map((item, index) => (
          <MenuItem key={index} link={item.link} title={item.title} />
        ))}
      </ul>
    </div>
  );
}
