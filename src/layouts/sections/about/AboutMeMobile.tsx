import React from 'react';
import styled from "styled-components";
import {theme} from "../../../components/Theme";

export const AboutMeMobile = () => {
    return (
        <StyledMain>
            <Photo/>
            <H1>
                <div>Hi, I'm John,</div>
                <div>Creative</div>
                <div>Technologist</div>
            </H1>
            <P>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.</P>

            <Button>Download Resume</Button>

        </StyledMain>
    );
};


const Photo = styled.img`
  width: 170.85px;
  height: 170.85px;
  margin-top: 33px;
  flex-shrink: 0;
  border-radius: 243px;
  background: url(../../../assets/proj1.png), lightgray 50% / cover no-repeat;



`


const H1 = styled.h1`
  height: 120px;
  width: 312px;
  font-size: medium;
  margin-top: 43.14px;
  border: 2px solid blue;
  text-align: center;
`
const Button = styled.button`
  margin-top: 38px;
  margin-bottom: 58px;
  
  width: 208px;
  height: 47px;
  
  background: #ff6464;
  border-radius: 2px;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;

  &:hover {
    box-shadow: 3px 0 10px 2px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`



const P = styled.p `
  font-size: small;
  width: 328px;
  height: 96px;
  border: 2px solid black;
  margin-top: 21px;
  margin-left: 24px;
  margin-right: 23px;
  
`

const StyledMain = styled.section`
  display: none;


  @media ${theme.media.mobile} {
    display: flex;
    flex-direction: column;
    height: 500px;
    align-items: center;
    border: 3px solid green;

  }
`

