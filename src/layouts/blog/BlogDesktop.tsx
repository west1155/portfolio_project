import React from 'react';
import styled from "styled-components";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {FlexWrapper} from "../../components/FlexWrapper";

export const BlogDesktop = () => {
    return (
        <>
            <Header/>
            <BlogContainer>

                <H2>Blog</H2>
                <FlexWrapper direction={'column'} align={'left'}>
                    <div>dsgd</div>
                    <div>dsgd</div>
                    <div>dsgd</div>
                </FlexWrapper>
            </BlogContainer>
            <Footer/>
        </>

    );
};


const BlogContainer = styled.div`
  width: 1152px;
  height: 1147px;

`

const H2 = styled.h2`
  font-family: Heebo, sans-serif;
  font-size: 44px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0;
  text-align: left;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;

`