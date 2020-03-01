import React, { Component } from "react";

export default class Skills extends Component{
    render(){
        return(
            <section className="features_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="main_title">
                                <h2>Key Skills </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row feature_inner">
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src="img/services/python.svg" alt=""></img>
                                    <h4>Python</h4>
                                    <p>One of my core strength when it comes to development. I have been working on
                                        python since 3 years.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src="img/services/js.png" alt=""></img>
                                    <h4>Javascript</h4>
                                    <p>One of the languages which i love to write and explore.
                                    I have been working in JS since 2 years.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src="img/services/angular.png" alt=""></img>
                                    <h4>Angular</h4>
                                    <p>I started writing angularjs 1 year ago and love it due to SPA and
                                        reusable components ability. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src="img/services/react.png" alt=""></img>
                                    <h4>React</h4>
                                    <p>Started writing react recently. I love how react works and its
                                    components driven ability and stable codebase</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src="img/services/ruby.png" alt=""></img>
                                <h4>Ruby</h4>
                                <p>It's been 1+ year, since i started writing ruby. I am hands-on in ruby
                                and ruby on rails as well.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src="img/services/elasticsearch.png" alt=""></img>
                                <h4>Elasticsearch</h4>
                                <p>I have been working on elasticsearch since last 1 year. I love it because of its
                                    fine tuned queries and scalability.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src="img/services/kibana.png" alt=""></img>
                                <h4>Kibana</h4>
                                <p>I have been working on this since last 1 year. It provides
                                    a very easy method to create charts out of the messy logs.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src="img/services/postgres.png" alt=""></img>
                                <h4>Postgres</h4>
                                <p>One of the DB technology i am following since last 2 years.
                                    I love it as it it scalable, robust and powerful.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}