import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
//import { Route, Link } from 'react-router-dom';
import "./style.css";
import Axios from 'axios';
import Wrapper from '../Wrapper';
import Questionnaire from "../Questionnaire"
class FindMentor extends Component {
    state = {
        result: [],
        questionnaireAnswered: false,
        loadingQuestionaireResults: true
    }

    mentors = () => {
        Axios.get("/users/mentors").then(response => {
            console.log(response.data);
            this.setState({
                result: response.data
            })

        });
    }

    componentDidMount() {
        this.mentors();
        this.isQuestionnaireAnswered(this.props.userid);
    }

    isQuestionnaireAnswered = userid => {
        Axios.get("/users/single-user/" + userid).then(response => {
            console.log(response.data);
            if (response.data.interest) {
                this.setState(
                    { questionnaireAnswered: true, loadingQuestionaireResults: false }
                )
            } else {
                this.setState(
                    { questionnaireAnswered: false, loadingQuestionaireResults: false }
                )
            }
        });
    }

    questionnaireSubmitted = () => {
        console.log("questionaire submitted!");
        this.setState(
            { questionnaireAnswered: true }
        )
    }

    sortMentors = () => {

    }

    connectMentor = () => {

        console.log('Connected with Mentor.');
    }

    passMentor = () => {

        console.log('Mentor Passed.');
    }

    render() {
        if (this.state.loadingQuestionaireResults) {
            return (<h1 className="text-center">Loading... Please Wait</h1>);
        } else {
            if (this.state.questionnaireAnswered) {
                return (
                    <div className="cardcontainer">
                        <h1 className="text-center">Make New Connections</h1>
                        <Wrapper>
                            {/* loop through array and create card for obj */}
                            {this.state.result.map(mentor => (
                                <div className="card text-center mx-auto" key={mentor._id}>
                                    <img src={mentor.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{mentor.name}</h5>
                                        <h6 className="card-title">Profession: {mentor.profession}</h6>
                                        <p className="card-text">{mentor.description}</p>
                                        <a href="#" id="connect" className="btn btn-primary" onClick={this.connectMentor}>Connect</a>
                                        <a href="#" id="pass" className="btn btn-danger" onClick={this.passMentor}>Pass</a>
                                    </div>
                                </div>
                            ))}
                        </Wrapper>
                    </div>
                );
            } else {
                return (
                    <div className="questionnaire-div">
                        <h1 className="text-center">Please answer these questions before we can show you possible mentors</h1>
                        <Questionnaire userid={this.props.userid} submittedForm={this.questionnaireSubmitted} />
                    </div>

                );
            }
        }

    };
}



export default FindMentor;