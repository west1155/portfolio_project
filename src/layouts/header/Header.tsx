import React from 'react';
import {HeaderMenuDesktop} from "./HeaderMenuDesktop";
import {HeaderMenuMobile} from "./HeaderMenuMobile";


const menuItems: Array<string> = ['Works', 'Contacts']


export const Header = () => {

    return (
        <>
            <HeaderMenuDesktop menuItems={menuItems}/>
            <HeaderMenuMobile menuItems={menuItems}/>
        </>
    );
};







