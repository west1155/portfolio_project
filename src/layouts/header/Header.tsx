import React, {useState} from 'react';
import {HeaderMenuDesktop} from "./HeaderMenuDesktop";
import styled from "styled-components";

const menuItems: string[] = ['Works', 'Contacts']

export interface HeaderPropsType {
    openContactModal: () => void
}

export const Header:React.FC<HeaderPropsType> = ({openContactModal}) => {

    return (
        <Section>
            <HeaderMenuDesktop openContactModal={openContactModal} menuItems={menuItems} />
        </Section>
    );
};


const Section = styled.section `
  position: relative;
`









