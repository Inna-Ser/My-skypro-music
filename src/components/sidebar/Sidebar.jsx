import Skeleton from "react-loading-skeleton";
import "./sidebar.css";

const SidebarItem = () => {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href="/">
        <img
          className="sidebar__img"
          src="/img/playlist01.png"
          alt="day's playlist"
        />
      </a>
    </div>
  );
};

const Personal = () => {
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
};

export function Sidebar(props) {
  return (
    <div className="main__sidebar sidebar">
      {props.isLoading ? (
        <Skeleton
          width={"240px"}
          height={"70px"}
          baseColor="transparent"
          highlightColor="transparent"
        />
      ) : (
        <Personal />
      )}
      <div className="sidebar__block">
        <div className="sidebar__list">
          {props.isLoading ? (
            <Skeleton width={"240px"} height={"130px"} baseColor="grey" />
          ) : (
            <SidebarItem />
          )}
          ;
          {props.isLoading ? (
            <Skeleton width={"240px"} height={"130px"} baseColor="grey" />
          ) : (
            <SidebarItem />
          )}
          ;
          {props.isLoading ? (
            <Skeleton width={"240px"} height={"130px"} baseColor="grey" />
          ) : (
            <SidebarItem />
          )}
          ;
        </div>
      </div>
    </div>
  );
}
