import styled from "styled-components";

export const FiltrListItem = styled.li `
cursor: pointer;
&:hover {
    text-decoration: underline;
    color: #bb5ee2;
}`

export const FilterListContaner = styled.ul `
max-height: 305px;
position: absolute;
top: 50px;
width: 248px;
height: fit-content;
background-color: #313131;
padding: 34px;
border-radius: 12px;
display: flex;
flex-direction: column;
gap: 10px;
overflow: auto;
`

export const FilterListGenre = styled.div `
margin: 0;
padding: 0;
-webkit-box-sizing: border-box;
box-sizing: border-box;
`

export const CenterblockFilter = styled.div `
display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 51px;
`

export const FilterTitle = styled.div `
font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`

export const FilterWrapper = styled.div `
position: relative;
`

export const FilterButton = styled.div `
font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;
  & FilterButton:not(:last-child) {
    margin-right: 10px;
  } 
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
`