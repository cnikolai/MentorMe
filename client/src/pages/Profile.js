import React, { Component } from 'react';
import UserProfile from '../components/UserProfile/Index';
import FindMentor from '../components/FindMentor/index';
import Questionnaire from '../components/Questionnaire';
import Chat from '../components/Chat';
import Indeed from './Indeed';
import Matches from '../components/Matches/index';
import './style.css';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = { fMentorClick: false, userClick: true, mentorClick: false, chatClick: false, indeedClick: false, logoutClick: false, questionClick: false }
  }

    userClick = () => {
      this.setState({
        userClick: true,
        fMentorClick: false,
        mentorClick: false,
        chatClick: false,
        indeedClick: false,
        logoutClick: false,
        questionClick: false
      })
      console.log('The user was clicked.');

    }

    questionClick = () => {
      this.setState({
        userClick: false,
        fMentorClick: false,
        mentorClick: false,
        chatClick: false,
        indeedClick: false,
        logoutClick: false,
        questionClick: true
      })
      console.log('The question was clicked.');

    }

    fMentorClick = () => {
      this.setState({
        userClick: false,
        fMentorClick: true,
        mentorClick: false,
        chatClick: false,
        indeedClick: false,
        logoutClick: false,
        questionClick: false
      })
      console.log('fMentor was clicked.');
      
    }

    mentorClick = () => {
      this.setState({
        userClick: false,
        fMentorClick: false,
        mentorClick: true,
        chatClick: false,
        indeedClick: false,
        logoutClick: false,
        questionClick: false
      })
      console.log('The Mentor was clicked.');
      
    }

    chatClick = () => {
      this.setState({
        userClick: false,
        fMentorClick: false,
        mentorClick: false,
        chatClick: true,
        indeedClick: false,
        logoutClick: false,
        questionClick: false
      })
      console.log('The chat was clicked.');
      
    }

    indeedClick = () => {
      this.setState({
        isEmptyState: false,
        userClick: false,
        fMentorClick: false,
        mentorClick: false,
        chatClick: false,
        indeedClick: true,
        logoutClick: false,
        questionClick: false
      })
      console.log('Indeed was clicked.');
      
    }

    logoutClick = () => {
      this.setState({
        userClick: false,
        fMentorClick: false,
        mentorClick: false,
        chatClick: false,
        indeedClick: false,
        logoutClick: true,
        questionClick: false
      })
      console.log('Log out was clicked.');
      
    }

    render() {
      
        return (
            <div className="container-fluid text-center">
              <div className="row">
                <div className="col-2 user-info">

                  <div className="user-options" id="username" onClick={this.userClick}>
                    Profile
                  
                  </div>

                  <div className="user-options" id='fMentor' name="fMentorClick" onClick={this.fMentorClick}>
                    Connect

                  </div>

                  <div className="user-options" id='mentor'onClick={this.mentorClick}>
                    Mentors

                  </div>

                  <div className="user-options" id='chat' onClick={this.chatClick}>
                    Chats
                  
                  </div>

                  <div className="user-options" id='indeed' onClick={this.indeedClick}>
                    Job Search
                  
                  </div>

                  <div className="user-options" id='questionnaire' onClick={this.questionClick}>
                    Questionnaire
                  
                  </div>

                </div>

                <div className="col-10" id="profile-view">
                  <div id="user-profile">
                  
                    <div>
                      {(this.state.isEmptyState || this.state.userClick) && <UserProfile userClick={this.userClick} username={this.props.user} location="La Plata, MO" interests="javascript, python, puzzles" profession="developer" />}
                    </div>

                    <div>
                      {(this.state.isEmptyState || this.state.fMentorClick) && <FindMentor userid={this.props.id}
                            fMentorClick={this.fMentorClick}
                            src={"https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                            mentorname={"Pika Chu"}
                            profession={"Detective"}
                            description={"Avid pursuer of clues and interested in broadening horizons."} 
                          />
                      }
                    </div>
                    
                    <div>
                      {(this.state.isEmptyState || this.state.questionClick) && <Questionnaire userid={this.props.id} questionClick={this.questionClick} />}
                    </div>

                    <div>
                      {(this.state.isEmptyState || this.state.mentorClick) && <Matches mentorClick={this.mentorClick} userid={this.props.id} />}
                    </div>

                    <div>
                      {(this.state.isEmptyState || this.state.chatClick) && <Chat chatClick={this.chatClick} />}
                    </div>

                    <div>
                      {(this.state.isEmptyState || this.state.indeedClick) && <Indeed indeedClick={this.indeedClick} />}
                    </div>
                    
                  </div>
                </div>

              </div>
            </div>
        )
    }
}

export default Profile;