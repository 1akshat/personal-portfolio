import React from 'react';
import NavBar from './components/navbar/navbar';
import Introduction from './components/introduction/introduction';
import AboutMe from './components/aboutMe/aboutme';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact'
import Footer from './components/footer/footer';


const App = () => {
  return (
    <>
      <NavBar />
      <Introduction />
      <AboutMe />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
