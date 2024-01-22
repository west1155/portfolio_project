import React from 'react';
import styled, {css} from "styled-components";
import {GlobalSvgSelector} from "../../components/GlobalSvgSelector";
import {theme} from "../../components/Theme";

export const HeaderMenuMobile = () => {
    return <StyledMobileMenu>
        <BurgerButton isOpen={true}>
            <GlobalSvgSelector id={'burger_mobile_menu_button'}/>
        </BurgerButton>
        <div></div>
        <p>......................................................</p>
    </StyledMobileMenu>
};


const StyledMobileMenu = styled.header`
  display: none;
  @media ${theme.media.mobile} {
    display: flex;
    border: 3px solid red;
    height: 50px;
    max-width: 375px;
    width: 100%;
  }

`


const BurgerButton = styled.div<{isOpen: boolean}>`
  position: absolute;
  top: 20px;
  right: 20px;
  
  border: 2px solid red;
  
`

