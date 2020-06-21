import React from 'react';
import NavBar from './components/navbar/navbar';
import Introduction from './components/introduction/introduction';
import AboutMe from './components/aboutMe/aboutme';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';


const App = () => {
  return (
    <>
      <NavBar />
      <Introduction />
      <AboutMe />
      <Skills />
      <Footer />
    </>
  )
}

export default App;
