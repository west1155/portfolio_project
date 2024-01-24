
import {Header} from "./layouts/header/Header";
import styled from "styled-components";
import {theme} from "./components/Theme";
import {AboutMe} from "./layouts/sections/about/AboutMe";
import {AboutMeMobile} from "./layouts/sections/about/AboutMeMobile";
import {Footer} from "./layouts/footer/Footer";


function App() {
    return (
        <div className="App">
            <PageContainer>
                <Header/>
                <AboutMe/>
                <Footer/>
            </PageContainer>
        </div>
    );
}


const PageContainer = styled.div`
  max-width: 1152px;
  max-height: 2041px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  
  @media ${theme.media.mobile} {
    min-width: 375px;
    min-height: 576px;
    width: 100%;
    height: 100%;
    
  }
`

export default App;
