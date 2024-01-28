import React, {useState} from 'react';
import styled from "styled-components";
import {theme} from "../../components/Theme";

interface HeaderMenuDesktopPropsType {
    menuItems: string[],
    openContactModal: () => void
}

export const HeaderMenuDesktop: React.FC<HeaderMenuDesktopPropsType> = ({menuItems, openContactModal}) => {

    return (
        <StyledHeader>
            <Nav>
                <Nav_menu>
                    {
                        menuItems.map((item, index) => (
                            <NavLink
                                href={""}
                                key={index}
                                onClick={openContactModal}
                            >{item}
                            </NavLink>)
                        )
                    }
                </Nav_menu>
            </Nav>
        </StyledHeader>
    )
};


const StyledHeader = styled.header`
  display: flex;
  justify-content: right;
  background-color: ${theme.colors.background_colour};

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


const NavLink = styled.a`
  color: black;
  height: 73px;
  width: 47px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  position: relative;
  letter-spacing: 0;
  text-align: right;
  margin-right: 33px;
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


