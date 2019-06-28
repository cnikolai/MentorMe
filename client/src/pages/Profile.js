import React, { Component } from 'react';
import UserProfile from '../components/UserProfile/Index';
import FindMentor from '../components/FindMentor/index';
import Questionnaire from '../components/Questionnaire';
import './style.css';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = { isEmptyState: true }
  }

    userClick = () => {
      this.setState({
        ...this.state,
        isEmptyState: false,
        userClick: false
      })
      console.log('The user was clicked.');

    }

    fMentorClick = () => {
      this.setState({
        ...this.state,
        isEmptyState: false,
        fMentorClick: false
      })
      console.log('fMentor was clicked.');
      
    }

    mentorClick() {
      console.log('The Mentor was clicked.');
      
    }

    chatClick() {
      console.log('The chat was clicked.');
      
    }

    logoutClick() {
      console.log('Log out was clicked.');
      
    }

    render() {
      
        return (
            <div className="container-fluid text-center">
              <div className="row">

                <div className="col-2 user-info">
                  
                  <div className="user-options" id="username" onClick={this.userClick}>
                    UserName
                  
                  </div>
                  

                  <div className="user-options" id='fMentor' onClick={this.fMentorClick}>
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
                      {this.state.isEmptyState && <UserProfile userClick={this.userClick} />}

                      {this.state.isAddTripState && <UserProfile />}
                    </div>
                    <div>
                      {this.state.isEmptyState && <FindMentor fMentorClick={this.fMentorClick} />}

                      {this.state.isAddTripState && <FindMentor />}
                    </div>
                    <Questionnaire></Questionnaire>

                  </div>
                </div>

              </div>
            </div>
        )
    }
}

export default Profile