import React from 'react';
import styled from "styled-components";
import {theme} from "../../components/Theme";


interface NavProps {
    width: string,
    height: string,
}

export const HeaderMenuDesktop = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeader>
            <Nav>
                <Nav_menu>
                    {props.menuItems.map((item: string) => (
                        <NavLink href={''} width={'71px'} height={'43px'}>{item}</NavLink>))}
                </Nav_menu>
            </Nav>
        </StyledHeader>
    )
};


const StyledHeader = styled.header`
  display: flex;
  justify-content: right;
  background-color: ${theme.colors.background_colour};
  border: 2px solid black;


  @media ${theme.media.mobile} {
    display: none;
  }
`
const Nav = styled.nav`
  position: relative;
  padding: 27px 60px;
`


const Nav_menu = styled.nav`
  display: flex;
  justify-content: flex-end;
  transition: all .3s;
  box-sizing: border-box;
`


const NavLink = styled.a<NavProps>`
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  position: relative;
  letter-spacing: 0;
  text-align: right;
  margin-right: 33px;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  transition: all .3s ease 0s;

  &:hover {
    text-decoration: underline;
    color: #ff6464;
  }
  
  &:visited {
    text-decoration: none;
  }
  
  &:active {
    color: #ff6464;
  }
`;


