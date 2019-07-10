import React, { Component } from 'react';
import coder from "../../images/coder.jpg";
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import "./style.css";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        var url = "https://res.cloudinary.com/dsegwvrng/image/upload/v1562724476/blank-profile-picture-973460_640_kokqis.png";
        var url = "";
        var encoded = encodeURI(url);
        this.state = { profilepictureurl: '', interests: '', location: '', profession: '', edit: false};
         //this.state = { pictures: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    // onDrop(picture) {
    //     this.setState({
    //         pictures: this.state.pictures.concat(picture)
    //     });
    //     var formData = new FormData();
    //     //var imagefile = this.state.pictures;
    //     formData.append("file", this.state.pictures[0]);
    //     axios.post("/users/profile/" + this.state.id, formData, {headers: {
    //         'Content-Type': 'multipart/form-data'
    //       }})
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.log('signup error: ');
    //         console.log(error);
    //     })
    // };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleEdit(event) {
        event.preventDefault();
        console.log('handleEdit');
        this.setState({
            edit: true
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit');
        var id = this.props.id;
        console.log("id inside handlesubmit: "+ id);
        axios
            .post('/users/profile/' + id, {
                profilepictureurl: encodeURI(this.state.profilepictureurl),
                location: this.state.location, 
                profession: this.state.profession,
                interests: this.state.interests
            })
            .then(response => {
                console.log('profile response: ');
                //console.log(response.data);
            }).catch(error => {
                console.log('profile picture url error: ');
                console.log(error);
            });
            this.setState({
                edit: false
            });
    }

    componentDidMount() {
        axios.get("/users/profile/" + this.props.id)
        .then(res => {
            console.log("res.data inside profile: ", res.data);
                this.setState({
                    interests: res.data.interests,
                    location: res.data.location,
                    profession: res.data.profession,
                    profilepictureurl: res.profileImage
                });
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            console.log(err);
        });
    }

    render() {
        if (!this.state.edit) {
            return (
                <div className='container-fluid text-center profile'>
                    <div className="row" id="title">
                        <h1>Profile</h1>
                    </div>
                    <div className="display-left">
                        <div id="userImage">
                            <img src={this.state.profilepictureurl} alt="Profile Picture"></img>
                            {/* {this.state.pictures.map(picture => (<img key={picture.name} src={URL.createObjectURL(picture)} alt={picture.name}/>))} */}
                        </div>
                            {/* <div className="form-group ">
                                <div className="col-7"></div>
                                <button
                                    className="btn btn-primary col-md-2 display-left"
                                    onClick={this.handleSubmit}
                                    type="submit">Upload</button>
                            </div> */}
                            {/* <div className="display-left">
                                <ImageUploader
                                    withIcon={true}
                                    singleImage={true}
                                    buttonText='Choose Image'
                                    onChange={this.onDrop}
                                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                    maxFileSize={5242880}
                                />
                            </div> */}
                            <div id="userInfo">
                                <br></br>
                                <div className="display-left"><strong>User Name:</strong> {this.props.username}</div><br></br>
                                <div className="display-left"><strong>User Location:</strong> {this.state.location}</div><br></br>
                                <div className="display-left"><strong>User Profession: </strong>{this.state.profession}</div><br></br>
                                <div className="display-left"><strong>User Interests: </strong>{this.state.interests}</div>
                            </div>
                            <form>
                        <div className="form-group">
                            <button
                                className="btn btn-primary col-8 display-left"
                                onClick={this.handleEdit}
                                type="submit">Edit</button>
                        </div>
                    </form>
                </div>
            </div>
            );
        } else {
            return (
                <div className='container-fluid text-center profile'>
                    <div className="row" id="title">
                        <h1>Profile</h1>
                    </div>
                    <div className="display-left">
                        <div id="userImage">
                            <img src={this.state.profilepictureurl} alt="Profile Picture"></img>
                        </div>
                        <div className="display-left">
                            <form>
                                <input className="form-input display-left"
                                    type="text"
                                    id="profilepictureurl"
                                    name="profilepictureurl"
                                    placeholder="Profile Picture URL"
                                    size="70"
                                    value={this.state.profilepictureurl}
                                    onChange={this.handleChange}
                                />
                                <br></br>
                                <input className="form-input display-left"
                                    type="text"
                                    id="location"
                                    name="location"
                                    size="50"
                                    placeholder="Location"
                                    value={this.state.location}
                                    onChange={this.handleChange}
                                />
                                <br></br>
                                <input className="form-input display-left"
                                    type="text"
                                    id="profession"
                                    name="profession"
                                    size="50"
                                    placeholder="Profession"
                                    value={this.state.profession}
                                    onChange={this.handleChange}
                                />
                                <br></br>
                                <input className="form-input display-left"
                                    type="text"
                                    id="interests"
                                    name="interests"
                                    size="50"
                                    placeholder="Interests"
                                    value={this.state.interests}
                                    onChange={this.handleChange}
                                />
                                <br></br>
                                <div className="form-group ">
                                    <div className="col-7"></div>
                                    <button
                                        className="btn btn-primary col-md-2 display-left"
                                        onClick={this.handleSubmit}
                                        type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default UserProfile