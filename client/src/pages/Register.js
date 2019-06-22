import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Register extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			email: '',
			isMentee: true
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
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/users/register', {
			username: this.state.username,
			password: this.state.password,
			email: this.state.email,
			isMentee: this.state.isMentee
		})
			.then(response => {
				if (response.data.ok) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					});
				} else {
					//TODO: put a warning at the top of the page
					console.log('username already taken');
				}
			}).catch(error => {
				console.log('signup error: ');
				console.log(error);
			})
	}

	render() {
		if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
		return (
			<div className="container">
				<div className="row mt-5">
					<div className="col-5"></div>
					<div className="SignupForm col-7">
						<h4 className="my-3">Sign up</h4>
						<form className="form-horizontal">
							<div className="form-group">
								<div className="col-ml-auto">
									<label className="form-label" htmlFor="username">Username: </label>
								</div>
								<div className="col-mr-auto">
									<input className="form-input"
										size="35"
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
								<div className="col-ml-auto">
									<label className="form-label" htmlFor="password">Password: </label>
								</div>
								<div className="col-mr-auto">
									<input className="form-input"
										size="35"
										placeholder="Password"
										type="password"
										name="password"
										value={this.state.password}
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className="form-group">
								<div className="col-ml-auto">
									<label className="form-label" htmlFor="username">Email: </label>
								</div>
								<div className="col-mr-auto">
									<input className="form-input"
										size="35"
										type="text"
										id="email"
										name="email"
										placeholder="Email"
										value={this.state.email}
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className="dropdown">
								<button className="btn btn-secondary dropdown-toggle my-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Dropdown button
  								</button>
								{/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a className="dropdown-item" href="#">Mentor</a>
									<a className="dropdown-item" href="#">Mentee</a>
								</div> */}
								<select className="dropdown-menu">
									<option value="false">Mentor</option>
									<option value="true">Mentee</option>
								</select> 
							{/* </div> */}
							<div className="form-group ">
								<div className="col-7"></div>
								<button
									className="btn btn-primary col-mr-auto"
									onClick={this.handleSubmit}
									type="submit"
								>Sign up</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
}

export default Register
