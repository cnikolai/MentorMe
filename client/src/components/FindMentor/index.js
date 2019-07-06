import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
//import { Route, Link } from 'react-router-dom';
import "./style.css";
import Axios from 'axios';
class FindMentor extends Component {
    state = {
        result: []
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
    }

    connectMentor = () => {
        
        console.log('Connected with Mentor.');
    }
    
    passMentor = () => {
       
        console.log('Mentor Passed.');
    }

    render() {
        return (

            <div className="cardcontainer">
                <h1 className="text-center">Make New Connections</h1>
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
            </div>
        );
    };
}



export default FindMentor;