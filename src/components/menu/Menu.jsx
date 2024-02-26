import { menu } from "../../utils/menu";
import { MenuLink, MenuList, MenuListItem, NavigatorMenu } from "./Menu.styled";
import "./menu.css";

const MenuItem = (props) => {
  return (
    <MenuListItem $active={props.active}>
      <MenuLink $active={props.active} href={props.link}>
        {props.title}
      </MenuLink>
    </MenuListItem>
  );
};

export const Menu = () => {
  return (
    <NavigatorMenu>
      <MenuList>
        {menu.map((item, index) => (
          <MenuItem
            key={index}
            link={item.link}
            title={item.title}
            active={index === 0}
          />
        ))}
      </MenuList>
    </NavigatorMenu>
  );
};
