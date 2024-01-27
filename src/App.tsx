import {Header} from "./layouts/header/Header";
import styled from "styled-components";
import {theme} from "./components/Theme";
import {AboutMe} from "./layouts/sections/about/AboutMe";
import {Footer} from "./layouts/footer/Footer";
import {Post} from "./layouts/sections/posts/Post";
import {Work} from "./layouts/sections/works/Work";
import {Particles_Mode} from "./components/particles/Particles";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {ContactForm} from "./layouts/contacts/ContactForm";


const App: React.FC = () =>  {
    return (
        <div className="App">
            <Particles_Mode />
            <Header/>
            <PageContainer>
                <AboutMe/>
                <Post />
            </PageContainer>
            <Footer/>
        </div>
    );
}


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;


  @media ${theme.media.mobile} {
    min-width: 375px;
    min-height: 576px;
    width: 100%;
    height: 100%;

  }`

export default App;
