import { sidebarItem } from "../utils/sidebarItem";

function SidebarItem(props) {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href={props.sidebarLink}>
        <img
          className="sidebar__img"
          src={props.sidebarImg}
          alt={props.description}
        />
      </a>
    </div>
  );
}

export function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          {sidebarItem.map((item) => {
          <SidebarItem link={item.sidebarLink} img={item.img.sidebarImg}/>
          })}
          
          
        </div>
      </div>
    </div>
  );
}
