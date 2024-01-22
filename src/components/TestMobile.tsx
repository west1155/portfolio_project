import React from 'react';
import styled from "styled-components";
import {theme} from "./Theme";

export const TestMobile = () => {
    return (<Testim>
        <p>dsfdgfvgfv</p>
    </Testim>);

        }

const Testim = styled.div `
    
  
  
  @media ${theme.media.mobile} {
    display: none;
    
  }
    
`
