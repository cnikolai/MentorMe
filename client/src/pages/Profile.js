import React, { Component } from 'react'
import './style.css'

class Profile extends Component {
    constructor() {
        super()
    }

    userClick() {
        console.log('The user was clicked.');
    }

    render() {
      
        return (
            <div className="container-fluid text-center">
              <div className="row">

                <div className="col-2 user-info">

                  <div className="user-options" id="username" onClick={userClick}>Username
                  
                  </div>

                  <div className="user-options" id='fMentor'>Find Mentors

                  </div>

                  <div className="user-options" id='mentor'>Mentors

                  </div>

                  <div className="user-options" id='chat'>Chats
                  
                  </div>

                  <div className="user-options" id='logout'>Log Out
                  
                  </div>

                </div>

                <div className="col-10 profile-view">
                  <p>info</p>
                </div>

              </div>
            </div>
        )
    }
}

export default Profile