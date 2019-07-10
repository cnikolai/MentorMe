import React, { Component } from "react";
import Axios from 'axios';
import SuccessBanner from "../SuccessBanner";
import WarningBanner from "../WarningBanner";
import ErrorBanner from "../ErrorBanner";


class MentorCard extends Component {

    state = {
        savedMentor: false,
        alreadySavedMentor: false,
        errorHappened: false
    }

    connectMentor = (mentorid, username, email, location, profession, img) => {

        console.log('Connected with Mentor.');

        console.log("mentorid: " + mentorid)
        console.log("username: " + username)
        console.log("email: " + email)
        console.log("location: " + location)
        console.log("profession: " + profession)
        console.log("img: " + img)

        Axios.get("/users/single-user/" + this.props.userid).then(response => {
            console.log(response.data.savedMentor);
            for (let i = 0; i < response.data.savedMentor.length; i++) {
                if (response.data.savedMentor[i].mentorid === mentorid) {
                    this.setState({ alreadySavedMentor: true, savedMentor: false, errorHappened: false });
                }
            }

            if (!this.state.alreadySavedMentor) {
                Axios.post("/users/save-mentor/" + this.props.userid, {
                    mentorid: mentorid,
                    username: username,
                    email: email,
                    profession: profession,
                    location: location,
                    img: img
                }).then(response => {
                    if (response.data) {
                        console.log(response.data)
                        this.setState({ savedMentor: true, alreadySavedMentor: false, errorHappened: false });
                    } else {
                        this.setState({ savedMentor: false, alreadySavedMentor: false, errorHappened: true });
                    }
                })
            }
        })


    }

    passMentor = () => {

        console.log('Mentor Passed.');
    }

    render() {
        return (
            <div className="card text-center mx-auto" >
                <img src={this.props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.username}</h5>
                    <h6 className="card-title">Profession: {this.props.profession}</h6>
                    <p className="card-text">{this.props.description}</p>
                    {this.state.savedMentor ? <SuccessBanner>Successfully saved mentor</SuccessBanner> : null}
                    {this.state.alreadySavedMentor ? <WarningBanner>You already saved that mentor</WarningBanner> : null}
                    {this.state.errorHappened ? <ErrorBanner>Error. Something went wrong</ErrorBanner> : null}
                    <a href="#" id="connect" className="btn btn-primary" onClick={() => this.connectMentor(this.props.mentorid, this.props.username, this.props.email, this.props.location, this.props.profession, this.props.img)}>Connect</a>
                    {/* <a href="#" id="pass" className="btn btn-danger" onClick={this.passMentor}>Pass</a> */}
                </div>
            </div>
        );
    }

}

export default MentorCard