import Skeleton from "react-loading-skeleton";
import "./sidebar.css";
import { Link } from "react-router-dom";

const SidebarItem = ({ id }) => {
  return (
    <div className="sidebar__item">
      <Link className="sidebar__link" to={`/category/${id}`}>
        <img
          className="sidebar__img"
          src="/img/playlist01.png"
          alt="day's playlist"
        />
      </Link>
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

export const Sidebar = (props) => {
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
            <SidebarItem id={1} />
          )}
          ;
          {props.isLoading ? (
            <Skeleton width={"240px"} height={"130px"} baseColor="grey" />
          ) : (
            <SidebarItem id={2} />
          )}
          ;
          {props.isLoading ? (
            <Skeleton width={"240px"} height={"130px"} baseColor="grey" />
          ) : (
            <SidebarItem id={3} />
          )}
          ;
        </div>
      </div>
    </div>
  );
};
