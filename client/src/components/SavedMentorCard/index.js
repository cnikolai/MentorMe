import React, { Component } from "react";

class SavedMentorCard extends Component {

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.username}</h5>
                    <h6 className="card-title">Profession: {this.props.profession}</h6>
                    <h6 className="card-title">Email: {this.props.email}</h6>
                    {/* <p className="card-text">Avid pursuer of clues and interested in broadening horizons</p> */}
                    <a href="#" className="btn btn-primary send-mes">Send a Message</a>
                    <a href="#" className="btn btn-danger" onClick={() => this.props.removeMentor(this.props.mentorid)}>Delete Mentor</a>
                </div>
            </div>
        );
    }
}

export default SavedMentorCard;