import React from 'react';
import { RESUME_LINK } from '../../utils/consts';

const Introduction = () => {

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
                  <a className="primary_btn" href={RESUME_LINK} target={"_blank"} rel="noopener noreferrer"><span>View CV</span></a>
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

export default Introduction;
