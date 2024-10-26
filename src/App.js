import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes.js"; // Add .js extension
import Navbar from "./components/Navbar.jsx"; // Add .jsx extension
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero.jsx"; // Add .jsx extension
import Skills from "./components/sections/Skills.jsx"; // Add .jsx extension
import Coding from "./components/sections/Coding.jsx"
import StarCanvas from "./components/canvas/Stars.jsx"; // Add .jsx extension
import { AnimatePresence } from "framer-motion";
import Education from "./components/sections/Education.jsx"; // Add .jsx extension
import Experience from "./components/sections/Experience.jsx"; // Add .jsx extension
import Projects from "./components/sections/Projects.jsx"; // Add .jsx extension
import Contact from "./components/sections/Contact.jsx"; // Add .jsx extension
import Footer from "./components/sections/Footer.jsx"; // Add .jsx extension
import ProjectDetails from "./components/Dialog/ProjectDetails.jsx"; // Add .jsx extension
import { useState } from "react";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <StarCanvas />
          <AnimatePresence>
            <div>
              <Hero />
              <Wrapper>
                <Skills />
                <Experience />
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
              <Wrapper>
                <Education />
                <Coding />
                
              </Wrapper>
              <Wrapper>
                <Contact />
              </Wrapper>
              <Footer />
              {openModal.state && (
                <ProjectDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}
            </div>
          </AnimatePresence>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
