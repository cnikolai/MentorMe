import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
//import { Route, Link } from 'react-router-dom';
import "./style.css";

class FindMentor extends Component {


    render() {
        return (
            <div className="card text-center">
                <img src={this.props.src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.mentorname}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <a href="#" className="btn btn-primary">Connect</a>
                    <a href="#" className="btn btn-danger">Pass</a>
                </div>
            </div>
        );
    };
}


        
export default FindMentor;