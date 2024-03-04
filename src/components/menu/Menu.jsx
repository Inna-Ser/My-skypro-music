import { NavLink } from "react-router-dom";
import { menu } from "../../utils/menu";
import { MenuList, MenuListItem, NavigatorMenu } from "./Menu.styled";
import "./menu.css";

const MenuItem = (props) => {
  
  return (
    <MenuListItem>
      <NavLink className="menu__link" to={props.link}>
        {props.title}
      </NavLink>
    </MenuListItem>
  );
};

export const Menu = () => {
  return (
    <NavigatorMenu>
      <MenuList>
        {menu.map((item, index) => (
          <MenuItem key={index} link={item.link} title={item.title} />
        ))}
      </MenuList>
    </NavigatorMenu>
  );
};
