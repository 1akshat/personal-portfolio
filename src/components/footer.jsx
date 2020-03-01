import React, { Component } from "react";

export default class Footer extends Component{
    render(){
        return(
            <footer className="footer_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="footer_top flex-column">
                                <div className="footer_logo">
                                    <a href="#">
                                        <img src="img/logo.png" alt=""></img>
                                    </a>
                                    <h4>Follow Me</h4>
                                </div>
                                <div className="footer_social">
                                    <a href="https://www.facebook.com/akshatuppal007"><i className="fa fa-facebook"></i></a>
                                    <a href="https://twitter.com/akshatuppal0910"><i className="fa fa-twitter"></i></a>
                                    <a href="https://www.linkedin.com/in/akshatuppal/"><i className="fa fa-linkedin"></i></a>
                                    <a href="https://github.com/1akshat"><i className="fa fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row footer_bottom justify-content-center">
                        <p className="col-lg-8 col-sm-12 footer-text">
                            {/*Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.*/}
                            Copyright &copy;
                            <script>document.write(new Date().getFullYear());</script>
                            All rights reserved | This template is made with <i className="fa fa-heart-o"
                                                                                aria-hidden="true"></i></p>
                    </div>
                </div>

            </footer>
        )
    }
}