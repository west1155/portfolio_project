import React, {useState} from 'react';
import {HeaderMenuDesktop} from "./HeaderMenuDesktop";
import {HeaderMenuMobile} from "./HeaderMenuMobile";
import styled from "styled-components";


const menuItems: Array<string> = ['Works', 'Contacts']

export const Header = () => {

    return (
        <Section>
            <HeaderMenuDesktop menuItems={menuItems}/>
            <HeaderMenuMobile menuItems={menuItems}/>
        </Section>
    );
};


const Section = styled.section `
  position: relative;
`









