import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
//import { Route, Link } from 'react-router-dom';
import "./style.css";

class FindMentor extends Component {

    render() {
        return (
            <div className="cardcontainer">
                <h1 className="text-center">Make New Connections</h1>
                    <div className="card text-center mx-auto">
                        <img src={this.props.src} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.mentorname}</h5>
                            <h6 className="card-title">Profession: {this.props.profession}</h6>
                            <p className="card-text">{this.props.description}</p>
                            <a href="#" id="connect" className="btn btn-primary">Connect</a>
                            <a href="#" id="pass" className="btn btn-danger">Pass</a>
                        </div>
                    </div>
            </div>
        );
    };
}



export default FindMentor;