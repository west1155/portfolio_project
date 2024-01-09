import React from 'react';
import styled from "styled-components";


interface NavProps {
    width: string,
    height: string
}

export const Header = () => {
    return (
        <StyledHeader>
            <Nav>
                <NavLink href={''} width={'57px'} height={'43px'}>Works</NavLink>
                <NavLink href={''} width={'106px'} height={'43px'}>Blog</NavLink>
                <NavLink href={''} width={'71px'} height={'43px'}>Contacts</NavLink>
            </Nav>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  background-color: white;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`

const NavLink = styled.a<NavProps>`
  color: black;
  text-decoration: none;
  font-weight: bold;
  padding: 27px 10px;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  &:hover {
    text-decoration: underline;
  }
`;
