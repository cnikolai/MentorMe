import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
//import { Route, Link } from 'react-router-dom';
import "./style.css";
import Axios from 'axios';
import Wrapper from '../Wrapper';
import SavedMentorCard from "../SavedMentorCard";
import ErrorBanner from "../ErrorBanner";

class Matches extends Component {

    state = {
        mentors: [],
        errorHappened: false
    }

    componentDidMount() {
        this.savedMentors();
    }

    savedMentors = () => {
        Axios.get("users/single-user/" + this.props.userid).then(response => {
            this.setState({ mentors: response.data.savedMentor }, console.log(this.state.mentors))
            // console.log(response)
        })
    }

    removeMentor = mentorid => {
        Axios.delete("/users/delete-mentor/" + mentorid).then(repsonse => {
            if (repsonse.data) {
                // Filter this.state.mentors for mentors with an id not equal to the id being removed
                const mentors = this.state.mentors.filter(mentor => mentor._id !== mentorid);
                // Set this.state.mentors equal to the new mentors array
                this.setState({ mentors, errorHappened: false });
            } else {
                this.setState({ errorHappened: true });
            }

        });


    };

    render() {
        return (
            <div className="container-fluid text-center">
                <h1 className="text-center">Your Connections</h1>

                {/* <div className="row"> */}
                <Wrapper>
                    {this.state.mentors.map(mentor => (
                        // <div className="card" key={mentor._id}>
                        //     <img className="card-img-top" src={mentor.img} alt="Card image cap" />
                        //     <div className="card-body">
                        //         <h5 className="card-title">{mentor.username}</h5>
                        //         <h6 className="card-title">Profession: {mentor.profession}</h6>
                        //         <h6 className="card-title">Email: {mentor.email}</h6>
                        //         {/* <p className="card-text">Avid pursuer of clues and interested in broadening horizons</p> */}
                        //         <a href="#" className="btn btn-primary send-mes">Send a Message</a>
                        //     </div>
                        // </div>
                        <SavedMentorCard key={mentor._id}
                            img={mentor.img}
                            username={mentor.username}
                            profession={mentor.profession}
                            email={mentor.email}
                            mentorid={mentor._id}
                            removeMentor={this.removeMentor}
                        />
                    ))}
                </Wrapper>
                {/* <div className="card col">
                        <img className="card-img-top" src="https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Pika Chu</h5>
                            <h6 className="card-title">Profession: Detective</h6>
                            <p className="card-text">Avid pursuer of clues and interested in broadening horizons</p>
                            <a href="#" className="btn btn-primary send-mes">Send a Message</a>
                        </div>
                    </div> */}

                {/* <div className="card col">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <h6 className="card-title">Profession</h6>
                            <p className="card-text">Brief information about interests and profession.</p>
                            <a href="#" className="btn btn-primary send-mes">Send a Message</a>
                        </div>
                    </div>

                    <div className="card col">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <h6 className="card-title">Profession</h6>
                            <p className="card-text">Brief information about interests and profession.</p>
                            <a href="#" className="btn btn-primary send-mes">Send a Message</a>
                        </div>
                    </div>

                    <div className="card col">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <h6 className="card-title">Profession</h6>
                            <p className="card-text">Brief information about interests and profession.</p>
                            <a href="#" className="btn btn-primary send-mes">Send a Message</a>
                        </div>
                    </div> */}

                {/* </div> */}
            </div>
        );
    };
}

export default Matches;