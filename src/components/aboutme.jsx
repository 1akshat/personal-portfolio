import React, { Component } from 'react';

export default class Aboutme extends Component{
    render(){
        return(
            <div>
                <section className="about_area section_gap">
                    <div className="container">
                        <div className="row justify-content-start align-items-center">
                            <div className="col-lg-5">
                                <div className="about_img">
                                    <img className="" src="img/about-us.png" alt=""></img>
                                </div>
                            </div>

                            <div className="offset-lg-1 col-lg-5">
                                <div className="main_title text-left">
                                    <h2>let’s <br/>
                                        Introduce about <br/>
                                        myself</h2>
                                    <p>
                                        Experienced Full Stack Developer.
                                        A demonstrated history of working in the education management industry and current experience of working in COnversational AI field.
                                    </p>
                                    <p>
                                        Skilled in all sort of languages and frameworks to have a strong core in full-stack development.
                                        Strong information technology professional with a B-tech focused in Computer Software Engineering from SRM University.
                                    </p>
                                    <a className="primary_btn" href="#"><span>Download CV</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="brand_area section_gap_bottom">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-12 col-md-4 col-sm-6">
                                        <div className="single-brand-item d-table">
                                            <div className="d-table-cell text-center">
                                                <img src="img/brands/insync.svg" alt=""></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-4 col-sm-6">
                                        <div className="single-brand-item d-table">
                                            <div className="d-table-cell text-center">
                                                <img src="img/brands/wisopt.png" alt=""></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-lg-2 col-lg-4 col-md-6">
                                <div className="client-info">
                                    <div className="d-flex mb-50">
                                        <span className="lage">2+</span>
                                        <span className="smll">Years Experience Working</span>
                                    </div>
                                    <div className="call-now d-flex">
                                        <div>
                                            <span className="fa fa-phone"></span>
                                        </div>
                                        <div className="ml-15">
                                            <p>call now</p>
                                            <h3>96005-77805</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}