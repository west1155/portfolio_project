import './App.css';

import {Header} from "./layouts/header/Header";
import {Footer} from "./layouts/footer/Footer";
import styled from "styled-components";


function App() {
    return (
        <div className="App">
            <PageContainer>
                <Header/>
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
