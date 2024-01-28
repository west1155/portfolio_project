import {Header} from "./layouts/header/Header";
import styled from "styled-components";
import {theme} from "./components/Theme";
import {AboutMe} from "./layouts/sections/about/AboutMe";
import {Footer} from "./layouts/footer/Footer";
import {Post} from "./layouts/sections/posts/Post";
import {Particles_Mode} from "./components/particles/Particles";
import React, {useState} from "react";
import {ModalContactBootStrap} from "./layouts/contacts/ModalContactBootStrap";
import {TestForm} from "./layouts/contacts/TestForm";


const App: React.FC = () => {


    const [showModal, setShowModal] = useState(false)
    const handleShow = () => setShowModal(true)
    const handleClose = () => setShowModal(false)

    return (
        <div className="App">
            <Header openContactModal={handleShow}/>
            <Particles_Mode/>
            <PageContainer>
                <AboutMe/>
                <button onClick={handleShow}>Show Modal Dialog</button>
                <Post/>
            </PageContainer>
            <Footer/>
            <TestForm isOpen={showModal} closeModal={handleClose}></TestForm>
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
