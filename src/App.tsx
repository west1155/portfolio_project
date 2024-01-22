
import {Header} from "./layouts/header/Header";
import styled from "styled-components";
import {theme} from "./components/Theme";
import {AboutMe} from "./layouts/sections/about/AboutMe";


function App() {
    return (
        <div className="App">
            <PageContainer>
                <Header/>
                <AboutMe />
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
    max-width: 375px;
    max-height: 667px;
  }
`

export default App;
