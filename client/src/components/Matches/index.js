import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
//import { Route, Link } from 'react-router-dom';
import "./style.css";

class Matches extends Component {


    render() {
        return (
            <div className="container-fluid text-center">
                <h1 className="text-center">Your Connections</h1>

                <div className="row">
                
                    <div className="card col">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h6 className="card-title">Name</h6>
                            <h6 className="card-title">Profession</h6>
                            <p className="card-text">Brief information about interests and profession.</p>
                            <a href="#" className="btn btn-primary send-mes">Send a Message</a>
                        </div>
                    </div>

                    <div className="card col">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h6 className="card-title">Name</h6>
                            <h6 className="card-title">Profession</h6>
                            <p className="card-text">Brief information about interests and profession.</p>
                            <a href="#" className="btn btn-primary send-mes">Send a Message</a>
                        </div>
                    </div>

                    <div className="card col">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h6 className="card-title">Name</h6>
                            <h6 className="card-title">Profession</h6>
                            <p className="card-text">Brief information about interests and profession.</p>
                            <a href="#" className="btn btn-primary send-mes">Send a Message</a>
                        </div>
                    </div>

                    <div className="card col">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h6 className="card-title">Name</h6>
                            <h6 className="card-title">Profession</h6>
                            <p className="card-text">Brief information about interests and profession.</p>
                            <a href="#" className="btn btn-primary send-mes">Send a Message</a>
                        </div>
                    </div>

                </div>
            </div>
        );
    };
}
        
export default Matches;