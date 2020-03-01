import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Introduction from './components/introduction';
import Aboutme from './components/aboutme';
import Skills from './components/skills';
import Contact from './components/contact'
import Footer from './components/footer';


class App extends Component {
  render(){
    return(
        <div>
            <Navbar></Navbar>
            <Introduction></Introduction>
            <Aboutme></Aboutme>
            <Skills></Skills>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
    }
}

export default App;
