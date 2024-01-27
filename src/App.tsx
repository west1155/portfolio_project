import {Header} from "./layouts/header/Header";
import styled from "styled-components";
import {theme} from "./components/Theme";
import {AboutMe} from "./layouts/sections/about/AboutMe";
import {AboutMeMobile} from "./layouts/sections/about/AboutMeMobile";
import {Footer} from "./layouts/footer/Footer";
import {Post} from "./layouts/sections/posts/Post";
import {Work} from "./layouts/sections/works/Work";
import {PostMobile} from "./layouts/sections/posts/PostMobile";


function App() {
    return (
        <div className="App">
            <Header/>
            <PageContainer>
                <AboutMe/>
                <Post />
                <Work />
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

/*dopisat media zaprosi s 1200px 1400px 1600px*/

export default App;
