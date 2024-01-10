import React from 'react';
import styled from "styled-components";

export const Work = () => {
    return (
        <>
            <Featured>
                <H2>Featured works</H2>
                <WorksContainer>
                    <WorkItem>
                        <WorkPicture/>
                        <Describtion>
                        <DescribtionTitle>Designing Dashboards</DescribtionTitle>
                        <DescribtionTime>
                            <Time>2020</Time>
                            <Desc_Feature>Dashboard</Desc_Feature>
                        </DescribtionTime>
                        <Desc_Text> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                            sunt nostrud amet.
                        </Desc_Text>
                        </Describtion>

                    </WorkItem>
                </WorksContainer>


            </Featured>
        </>
    )
        ;
};


const H2 = styled.h2`
  color: var(--Dark-Color, #21243D);
  font-family: Heebo, serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 60px; /* 272.727% */
`


const Featured = styled.div`
  background: aquamarine;
  width: 1152px;
  height: 2041px;
`

const WorksContainer = styled.div`
  padding: 0;
  margin: 0;
  border: 0;
  font-family: Heebo, sans-serif;
  line-height: 1;
  font-size: 14px;
`

const WorkItem = styled.div`
  display: flex;
  margin-top: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
`

const WorkPicture = styled.picture`
  width: 246px;
  height: 180px;
  margin-right: 18px;
  flex-shrink: 0;
  border-radius: 6px;
  background: url(../../../assets/work1.png), lightgray 50% / cover no-repeat;
`


const DescribtionTitle = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  color: #21243d;
`

const Time = styled.time`
  background: #142850;
  border-radius: 16px;
  font-weight: 900;
  font-size: 18px;
  color: #fff;
  padding: 5px 15px;
  margin-right: 35px;
  line-height: 1;
`

const Desc_Feature = styled.div`
  font-size: 20px;
  line-height: 27px;
  color: #8695a4;
`
const Desc_Text = styled.div`
  font-size: 16px;
  line-height: 23px;
  color: #21243d;
  margin-top: 15px;
`

const Describtion = styled.div `
  display: flex;
  flex-direction: column;
`
const DescribtionTime = styled.div `
  display: flex;
  flex-direction: row;
`