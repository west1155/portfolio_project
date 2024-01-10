import './App.css';

import {Header} from "./layouts/header/Header";
import {Footer} from "./layouts/footer/Footer";
import styled from "styled-components";
import {AboutMe} from "./layouts/sections/about/AboutMe";
import {Post} from "./layouts/sections/posts/Post";
import {Work} from "./layouts/sections/works/Work";


function App() {
    return (
        <div className="App">
            <PageContainer>
                <Header/>
                <AboutMe/>
                <Post/>
                <Work/>
                <Footer/>
            </PageContainer>
        </div>
    );
}


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export default App;
