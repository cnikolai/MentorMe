import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import "./style.css";

class FindMentor extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="card">
                <img src="https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Mentor's Name</h5>
                    <p className="card-text">Mentor's Industry and Description</p>
                    <a href="#" className="btn btn-primary">Connect</a>
                    <a href="#" className="btn btn-danger">Pass</a>
                </div>
            </div>
        );
    }
}
        
export default FindMentor;