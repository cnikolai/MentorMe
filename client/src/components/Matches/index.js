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

                {this.state.errorHappened ? <ErrorBanner>Error. Something went wrong. Could not delete mentor</ErrorBanner> : null}

                <Wrapper>
                    {this.state.mentors.map(mentor => (

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

            </div>
        );
    };
}

export default Matches;