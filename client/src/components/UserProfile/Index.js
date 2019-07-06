import React, { Component } from 'react';
import coder from "../../images/coder.jpg";
import "./style.css";

class UserProfile extends Component {

    render() {
        return (
            <div className='container-fluid text-center profile'>

            <div className="row" id="title">
                    <h1>Profile</h1>
            </div>
                <div className="row">
                    <div className="col-md-1" id="userImage">
                        <img src={coder} alt="user image thumbnail" />
                    </div>
                </div>
                
                <div id="userInfo">
                    <br></br>
                    <div className="display-linebreak"><strong>User Name:</strong> {this.props.username}</div><br></br>
                    <div className="display-linebreak"><strong>User Location:</strong> {this.props.location}</div><br></br>
                    <div className="display-linebreak"><strong>User Profession: </strong>{this.props.profession}</div><br></br>
                    <div className="display-linebreak"><strong>User Interests: </strong>{this.props.interests}</div>
                </div>
            </div>
        );
    }
}

export default UserProfile