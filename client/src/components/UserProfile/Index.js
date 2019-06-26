import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
//import logo from '../logo.svg';
//import '../App.css';
import axios from 'axios'
import "./style.css";

class UserProfile extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='container-fluid text-center profile'>
                <div className="row">
                    <div className='col' id="userImage">
                        <img src="../../images/coder.jpg" className="img-fluid" alt="img-thumbnail" />
                    </div>

                    <div className='col' id="userInfo">
                        <p>User Name</p>
                        <p>User Location</p>
                        <p>User Profession</p>
                        <p>User Interests</p>
                    </div>
                </div>
                <div className="row quest">
                    <div className='col' id='questions'>
                        questions here
                    </div>
                </div>
            </div>
        );

    }
}

export default UserProfile