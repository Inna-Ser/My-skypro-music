import { Link } from "react-router-dom";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "./sidebarList.css";

export const SidebarList = ({ category, isLoading }) => {
  return (
    <ul className="sidebar__item">
      {category.map((item) =>
        isLoading ? (
          <Skeleton width={"240px"} height={"130px"} baseColor="grey" />
        ) : (
          <li key={item.id}>
            <Link to={`/category/${item.id}`}>
              <img src={item.img} alt={item.title} />
            </Link>
          </li>
        )
      )}
    </ul>
  );
};
// export const SidebarItem2 = ({ id }) => {
//   return (
//     <div className="sidebar__item">
//       <Link className="sidebar__link" to={`/category/${id}`}>
//         <img
//           className="sidebar__img"
//           src={"/img/playlist02.png"}
//           alt="day's playlist"
//         />
//       </Link>
//     </div>
//   );
// };

// export const SidebarItem3 = ({ id }) => {
//   return (
//     <div className="sidebar__item">
//       <Link className="sidebar__link" to={`/category/${id}`}>
//         <img
//           className="sidebar__img"
//           src={"/img/playlist03.png"}
//           alt="day's playlist"
//         />
//       </Link>
//     </div>
//   );
// };
