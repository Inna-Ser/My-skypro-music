import { sidebarItem } from "../../utils/sidebarItem";
import "./sidebar.css";

function SidebarItem(props) {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href={props.link}>
        <img className="sidebar__img" src={props.img} alt={props.description} />
      </a>
    </div>
  );
}

function Personal() {
  return (
    <div className="sidebar__personal">
      <p className="sidebar__personal-name">Sergey.Ivanov</p>
      <div className="sidebar__icon">
        <svg alt="logout">
          <use xlinkHref="img/icon/sprite.svg#logout"></use>
        </svg>
      </div>
    </div>
  );
}

export function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
      <Personal />
      <div className="sidebar__block">
        <div className="sidebar__list">
          {sidebarItem.map((item, index) => (
            <SidebarItem
              key={index}
              link={item.sidebarLink}
              img={item.img.sidebarImg}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
