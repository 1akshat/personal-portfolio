import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    return (
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content">
                  <h3 className="text-uppercase">Hell0</h3>
                  <h1 className="text-uppercase">I am akshat</h1>
                  <h5 className="text-uppercase">full stack developer</h5>
                  <div className="d-flex align-items-center">
                    <a className="primary_btn" href="https://docs.google.com/document/d/1V-SuksmbU-ZR8xz8QgmltYwBcXbsBmGdwfbnRoI_n-c/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><span>View CV</span></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home_right_img">
                  <img className="" src="img/banner/home-page-hero.svg" alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
