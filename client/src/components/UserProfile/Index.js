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
        this.state = { profilepictureurl: ''};
         //this.state = { pictures: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            [event.target.name]: encodeURI(event.target.value)
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit');
        var iid = this.props.id;
        console.log("id inside handlesubmit: "+ iid);
        var profilepictureurl = this.state.profilepictureurl;
        axios
            .post('/users/profile/' + iid, {
                profilepictureurl: profilepictureurl
            })
            .then(response => {
                console.log('profile response: ');
                //console.log(response.data);

            }).catch(error => {
                console.log('profile picture url error: ');
                console.log(error);
            });
    }

    componentDidMount() {
        axios.get("/users/profile/" + this.props.id)
        .then(res => {
            console.log("res.data inside profile: ", res.data);
                this.setState({
                    interests: ["javascript", "react", "puzzles"],
                    location: res.data.location,
                    profilepictureurl: res.profileImage
                });
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            console.log(err);
        });
    }

    render() {
        return (
            <div className='container-fluid text-center profile'>
            <div className="row" id="title">
                    <h1>Profile</h1>
            </div>
                <div className="display-left">
                    <div id="userImage">
                        <img src={coder} alt="Profile Picture"></img>
                        {/* {this.state.pictures.map(picture => (<img key={picture.name} src={URL.createObjectURL(picture)} alt={picture.name}/>))} */}
                    </div>
                    <div className="display-left">
                        {/* <ImageUploader
                            withIcon={true}
                            singleImage={true}
                            buttonText='Choose Image'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        /> */}
                        <form>
                        <input className="form-input"
                            type="text"
                            id="profilepictureurl"
                            name="profilepictureurl"
                            placeholder="Profile Picture URL"
                            size="70"
                            value={this.state.profilepictureurl}
                            onChange={this.handleChange}
                        />
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="btn btn-primary col-md-2 display-left"
                                onClick={this.handleSubmit}
                                type="submit">Upload</button>
                        </div>
                        </form>
                    </div>
                </div>
                
                <div id="userInfo">
                    <br></br>
                    <div className="display-left"><strong>User Name:</strong> {this.props.username}</div><br></br>
                    <div className="display-left"><strong>User Location:</strong> {this.props.location}</div><br></br>
                    <div className="display-left"><strong>User Profession: </strong>{this.props.profession}</div><br></br>
                    <div className="display-left"><strong>User Interests: </strong>{this.props.interests}</div>
                </div>
            </div>
        );
    }
}

export default UserProfile