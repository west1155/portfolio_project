import React from 'react';
import styled from "styled-components";

export const Post = () => {
    return (
        <StyledPosts>
            <Section>
                <FlexRow>
                    <h2>Recent posts</h2>
                    <a href={''}>View all</a>
                </FlexRow>
                <FlexRow>
                    <ArticleWrap>
                        <h2>Making a design system from scratch</h2>
                        <span>12 Feb 2020</span>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </ArticleWrap>
                    <ArticleWrap>
                        <h2>Making a design system from scratch</h2>
                        <span>12 Feb 2020</span>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </ArticleWrap>
                </FlexRow>
            </Section>


        </StyledPosts>
    );
};


const StyledPosts = styled.div`
  background: #EDF7FA;
  padding: 20px 0 30px;
  width: 1152px;
  height: 396px;
  flex-shrink: 0;
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`

const ArticleWrap = styled.article `
  flex: 0 1 48%;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 10px 0 rgba(187, 225, 250, 0.25);

`
const Section = styled.section`
  max-width: 860px;
  margin: 0 auto;
`
