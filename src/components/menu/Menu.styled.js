import styled from "styled-components";

export const MenuListItem = styled.li `
    padding: 5px 0;
    margin-bottom: 16px;
`

export const MenuLink = styled.a `
color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.$active ? "#bb5ee2" : "white"};
`

export const NavigatorMenu = styled.div `
display: block;
    visibility: visible;
`

export const MenuList = styled.ul `
padding: 18px 0 10px 0;
`