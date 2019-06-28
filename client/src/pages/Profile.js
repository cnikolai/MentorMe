import React, { Component } from 'react';
import UserProfile from '../components/UserProfile/Index';
import FindMentor from '../components/FindMentor/index';
import Questionnaire from '../components/Questionnaire';
import './style.css';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = { isEmptyState: true, fMentorClick: false, userClick: false, mentorClick: false, chatClick: false, logoutClick: false, questionClick: false }
  }

    userClick = () => {
      this.setState({
        isEmptyState: false,
        userClick: true,
        fMentorClick: false,
        mentorClick: false,
        chatClick: false,
        logoutClick: false,
        questionClick: false
      })
      console.log('The user was clicked.');

    }

    questionClick = () => {
      this.setState({
        isEmptyState: false,
        userClick: false,
        fMentorClick: false,
        mentorClick: false,
        chatClick: false,
        logoutClick: false,
        questionClick: true
      })
      console.log('The question was clicked.');

    }

    fMentorClick = () => {
      this.setState({
        isEmptyState: false,
        userClick: false,
        fMentorClick: true,
        mentorClick: false,
        chatClick: false,
        logoutClick: false,
        questionClick: false
      })
      console.log('fMentor was clicked.');
      
    }

    mentorClick() {
      this.setState({
        isEmptyState: false,
        userClick: false,
        fMentorClick: false,
        mentorClick: true,
        chatClick: false,
        logoutClick: false,
        questionClick: false
      })
      console.log('The Mentor was clicked.');
      
    }

    chatClick() {
      this.setState({
        isEmptyState: false,
        userClick: false,
        fMentorClick: false,
        mentorClick: false,
        chatClick: true,
        logoutClick: false,
        questionClick: false
      })
      console.log('The chat was clicked.');
      
    }

    logoutClick() {
      this.setState({
        isEmptyState: false,
        userClick: false,
        fMentorClick: false,
        mentorClick: false,
        chatClick: false,
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
                  
                  <div className="user-options" id="username" name="userClick" onClick={this.userClick}>
                    UserName
                  
                  </div>
                  

                  <div className="user-options" id='fMentor' name="fMentorClick" onClick={this.fMentorClick}>
                    Find Mentors

                  </div>

                  <div className="user-options" id='mentor'onClick={this.mentorClick}>
                    Mentors

                  </div>

                  <div className="user-options" id='chat' onClick={this.chatClick}>
                    Chats
                  
                  </div>

                  <div className="user-options" id='logout' onClick={this.logoutClick}>
                    Log Out
                  
                  </div>

                </div>

                <div className="col-10" id="profile-view">
                  <div id="user-profile">

                    <div>
                      {(this.state.isEmptyState || this.state.userClick) && <UserProfile userClick={this.userClick} />}                                     
                    </div>

                    <div>
                      {(this.state.isEmptyState || this.state.fMentorClick) && <FindMentor fMentorClick={this.fMentorClick} />}

                    </div>
                    
                    <div>
                      {(this.state.isEmptyState || this.state.questionClick) && <Questionnaire questionClick={this.questionClick} />}
                    </div>
                    

                  </div>
                </div>

              </div>
            </div>
        )
    }
}

export default Profile