import React from 'react';
import styled from "styled-components";
import futwork1 from '../../../assets/work1.png'
import futwork2 from '../../../assets/work2.png'
import futwork3 from '../../../assets/work3.png'


interface WorkPicturePropsType {
    id: string;
}

export const Work = () => {
    return (
            <Featured>
                <H2>Featured works</H2>
                <WorksContainer>
                    <WorkItem>
                        <WorkPicture src={futwork1} alt={''}/>
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

                    <WorkItem>
                        <WorkPicture src={futwork2} alt={''}/>
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
                    <WorkItem>
                        <WorkPicture src={futwork3} alt={''}/>
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
    )
        ;
};

const Featured = styled.section`
  max-width: 860px;
  padding-top: 40px;
  padding-bottom: 20px;
  background-color: white;
`

const H2 = styled.h2 `
  font-size: 22px;
  line-height: 28px;
  color: #21243d;
  margin-bottom: 20px;
`

const WorksContainer = styled.div`
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

const WorkPicture = styled.img`
  width: 246px;
  height: 180px;
  margin-right: 18px;
  flex-shrink: 0;
  border-radius: 6px;
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