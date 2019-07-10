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
        user: {},
        questionnaireAnswered: false,
        loadingQuestionaireResults: true
    }

    mentors = () => {
        Axios.get("/users/mentors").then(response => {
            console.log(response.data);
            this.setState({
                result: response.data
            })
            this.filterMentors();
        });
    }

    componentDidMount() {
        this.isQuestionnaireAnswered(this.props.userid);
        // this.mentors();
    }

    isQuestionnaireAnswered = userid => {
        Axios.get("/users/single-user/" + userid).then(response => {
            console.log(response.data);
            if (response.data.interest) {
                this.setState(
                    { user: response.data, questionnaireAnswered: true, loadingQuestionaireResults: false }, () => { this.mentors() }
                )
            } else {
                this.setState(
                    { user: response.data, questionnaireAnswered: false, loadingQuestionaireResults: false }
                )
            }
        });
    }

    questionnaireSubmitted = () => {
        console.log("questionaire submitted!");
        this.setState(
            { questionnaireAnswered: true }, () => { this.mentors() }
        )
    }

    filterMentors = () => {
        // filter out mentors who haven't done the questionnaire
        const result = this.state.result.filter(mentor => { if (mentor.interest) return mentor; });
        this.setState({ result });
        this.sortMentors();
    }

    sortMentors = () => {
        console.log(this.state.user)
        var userScores = Object.values(this.state.user.interest);
        var tempArr = [];

        // Loop through the mentor array of objects
        for (var i = 0; i < this.state.result.length; i++) {
            // For each mentor we are going to test against the user, store their questionnaire results in a temp array for comparison
            // questionnaire answers are json object, we'll turn it into an array
            var mentorScores = Object.values(this.state.result[i].interest);
            var totalDifference = 0;

            // Go through the mentor's scores and find the total difference 
            // (start at 1 so it doesn't try to compare interest ids and before the last index because that's some sort of mongodb property)
            for (var j = 1; j < mentorScores.length - 1; j++) {
                console.log(mentorScores[j], userScores[j]);
                totalDifference += Math.abs(parseInt(mentorScores[j]) - parseInt(userScores[j]));
            }

            console.log("=====");

            // totalDifference will be added as a new poperty to the mentors
            var appendTotalDifference = this.state.result[i];
            appendTotalDifference["totalDifferenceToQs"] = totalDifference;
            tempArr.push(appendTotalDifference);
        }

        // sort the array based on the total difference to answers of the questionnaire to the user
        tempArr.sort((a, b) => parseFloat(a.totalDifferenceToQs) - parseFloat(b.totalDifferenceToQs));
        this.setState({ result: tempArr });
        console.log(this.state.result)
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
                                        <h5 className="card-title">{mentor.username}</h5>
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