import React, { Component } from 'react'
import axios from 'axios'

class Register extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			email: ''
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
		axios.post('/api/user/', {
			username: this.state.username,
			password: this.state.password,
			email: this.state.email
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}

	render() {
		return (
			<div className="container">
				{/* <div className="page-header-image" style="background-image:
                url(‘./assets/img/presentation-page/nuk-pro-back-sky.jpg’)"> 
            	</div> */}
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
								<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a className="dropdown-item" href="#">Mentor</a>
									<a className="dropdown-item" href="#">Mentee</a>
								</div>
							</div>
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

export default Register
