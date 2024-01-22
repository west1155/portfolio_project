import React from 'react';
import styled from "styled-components";
import {theme} from "./Theme";

export const TestDesktop = () => {
    return (<Testim>
            <p>dsfdgfvgfv</p>
        </Testim>);

}

const Testim = styled.div `
  
  position: relative;
  p {
    color: blue;
  }


  @media ${theme.media.mobile} {

    p {
      color: red;
    }

  }

`
