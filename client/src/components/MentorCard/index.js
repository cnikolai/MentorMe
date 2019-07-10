import React, { Component } from "react";
import Axios from 'axios';
import SuccessBanner from "../SuccessBanner";


class MentorCard extends Component {

    state = {
        savedMentor: false
    }

    connectMentor = (username, email, location, profession, img) => {

        console.log('Connected with Mentor.');

        console.log("mentorObj: " + username)
        console.log("mentorObj: " + email)
        console.log("mentorObj: " + location)
        console.log("mentorObj: " + profession)
        console.log("mentorObj: " + img)

        Axios.post("users/save-mentor/" + this.props.userid, {
            username: username,
            email: email,
            profession: profession,
            location: location,
            img: img
        }).then(response => {
            if (response.data) {
                console.log(response.data)
                this.setState({ savedMentor: true })
            }
        })
    }

    passMentor = () => {

        console.log('Mentor Passed.');
    }

    render() {
        return (
            <div className="card text-center mx-auto" key={this.props._id}>
                <img src={this.props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.username}</h5>
                    <h6 className="card-title">Profession: {this.props.profession}</h6>
                    <p className="card-text">{this.props.description}</p>
                    {this.state.savedMentor ? <SuccessBanner>Successfully Saved Mentor</SuccessBanner> : null}
                    <a href="#" id="connect" className="btn btn-primary" onClick={() => this.connectMentor(this.props.username, this.props.email, this.props.location, this.props.profession, this.props.img)}>Connect</a>
                    <a href="#" id="pass" className="btn btn-danger" onClick={this.passMentor}>Pass</a>
                </div>
            </div>
        );
    }

}

export default MentorCard