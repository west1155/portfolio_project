import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {GlobalSvgSelector} from "../../components/GlobalSvgSelector";
import {theme} from "../../components/Theme";

export const HeaderMenuMobile = (props: { menuItems: Array<string> }) => {

    const [isOpen, setIsOpen] = useState(false)

    return <StyledMobileMenu>
        <BurgerButton onClick={() => setIsOpen(true)}>
            <GlobalSvgSelector id={'burger_mobile_menu_button'}/>
        </BurgerButton>
        <BurgerMenuPopUp isOpen={isOpen} >
            {props.menuItems.map((item: string) => (
                <a href={''}>{item}</a>))}
        </BurgerMenuPopUp>
    </StyledMobileMenu>
};

const StyledMobileMenu = styled.header`
  display: none;
  @media ${theme.media.mobile} {
    display: flex;
    width: 100vw;
    height: 50px;
    border: 2px solid saddlebrown;
  }
`

const BurgerButton = styled.div`
  display: flex;
  height: 40px;
  width: 40px;
  position: absolute;
  top: 10px;
  right: 20px;


  border: 2px solid red;

`


const BurgerMenuPopUp = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999999;
  background-color: rgb(0, 0, 0);
  display: none;


  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
  `}
`

