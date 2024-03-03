import Skeleton from "react-loading-skeleton";
import "./sidebar.css";
import { Personal } from "./personal/Personal";
import {
  SidebarItem1,
  SidebarItem2,
  SidebarItem3,
  SidebarList,
} from "../sidebarList/SidebarList";
import { categories } from "../../utils/categories";

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
            <SidebarList category={categories} />
          )}
          ;
        </div>
      </div>
    </div>
  );
};
