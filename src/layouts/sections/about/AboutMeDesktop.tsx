import React from 'react';
import styled from "styled-components";
import {theme} from "../../../components/Theme";

export const AboutMeDesktop = () => {
    return (
        <StyledMain>

            <Container>
                <Promo_Row>
                    <Promo_Column>
                        <H1>Hi, I am John, <div>Creative Technologist</div></H1>

                        <StyleText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat
                            duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</StyleText>


                        <Button>Download Resume</Button>
                    </Promo_Column>
                    <Promo_Column>
                        <Photo/>
                    </Promo_Column>
                </Promo_Row>
            </Container>


        </StyledMain>
    );
};


const H1 = styled.h1 `
  font-family: Heebo,sans-serif;
  font-size: 44px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0;
  text-align: left;
  padding-bottom: 40px;

`

const Button = styled.button`
  margin-top: 38px;
  width: 210px;
  height: 45px;
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

const Photo = styled.img`
  width: 243px;
  height: 243px;
  flex-shrink: 0;
  border-radius: 243px;
  background: url(../../../assets/proj1.png), lightgray 50% / cover no-repeat;

`

const Promo_Row = styled.div`
  display: flex;
  
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

const Promo_Column = styled.div`
`

const Container = styled.div`
  background-color: #ffffff;
  max-width: 960px;
  margin: 0 auto;
`

const StyleText = styled.p `
  font-family: Heebo, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  margin-bottom: 40px;
`

const StyledMain = styled.section`
  padding: 130px 0 88px ;
  
  @media ${theme.media.mobile} {
    display: none;
  }
`

