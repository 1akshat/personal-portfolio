import React from 'react';

const NavBar = () => {

  return (

    <header className="header_area">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            {/*Brand and toggle get grouped for better mobile display*/}
            <a className="navbar-brand logo_h" href="/"><img src="img/logo.png" alt=""></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            {/*Collect the nav links, forms, and other content for toggling*/}
            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav justify-content-end">
                <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
                {/*<li className="nav-item"><a className="nav-link" href="/Skills">Blog</a></li>*/}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>

  )

}

export default NavBar;