import React from 'react';
import styled from "styled-components";
import photo_img from '../../../assets/proj1.png'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const AboutMe = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <h1>Hi, I am John, Creative Technologist</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <Button>Download Resume</Button>
                </div>
                <div>
                    <Photo/>
                </div>
            </FlexWrapper>


        </StyledMain>
    );
};


const Button = styled.button`
  width: 167px;
  height: 21px;
  flex-shrink: 0;
  text-decoration-color: #FFF;
  font-family: Heebo, serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const Photo = styled.img`
  width: 243px;
  height: 243px;
  flex-shrink: 0;
  border-radius: 243px;
  background: url(../../../assets/proj1.png), lightgray 50% / cover no-repeat;

`

const StyledMain = styled.div`
  min-height: 50svh;
  background: bisque
`

