import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Introduction from './components/introduction';


class App extends Component {
  render(){
    return(
        <header className="header_area">
          <div className="main_menu">
          <Navbar></Navbar>
            <Introduction></Introduction>
          </div>
        </header>
    )
    }
}

export default App;
