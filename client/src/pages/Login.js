import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit');
        axios
            .post('/users/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ', response.data);
                if (response.status === 200) {
                    // update App.js state
                    console.log("login username: ", response.data);
                    if (response.data.register) {
                        console.log("response: ", response.data.register.errors[0].msg);
                        var errors = document.getElementById("errors");
                        errors.innerText = response.data.register.errors[0].msg;
                        console.log("errors", errors);
                        //errors.classList.remove("alert alert-danger");
                        errors.classList.add("alert");
                        errors.classList.add("alert-danger");
                        // this.setState({
                        //     redirectTo: '/login'
                        // });
                    }
                    else {
                        this.props.updateUser({
                            loggedIn: true,
                            id: response.data._id,
                            username: response.data.username
                        })
                        // update the state to redirect to home
                        this.setState({
                            redirectTo: '/profile'
                        });
                    }
                }
            }).catch(error => {
                console.log('login error: ');
                console.log(error);
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="container">
                    <br></br>
					<br></br>
					<div id="errors"></div>
                    <br></br>
                    <div className="container2">
                    <form className="form-horizontal">
                        <h4>Login</h4>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="username">Username</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="btn btn-primary col-7 col-mr-auto"
                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                        </div>
                    </form>
                </div>
                </div>
            )
        }
    }
}

export default Login
