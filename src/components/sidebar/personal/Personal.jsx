import { NavLink } from "react-router-dom";

export const Personal = () => {
    return (
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <NavLink className="sidebar__icon" to="/login">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </NavLink>
      </div>
    );
  };