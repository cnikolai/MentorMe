import React, { Component } from 'react';
import coder from "../../images/coder.jpg";
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import "./style.css";

class UserProfile extends Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture)
        });
        var formData = new FormData();
        //var imagefile = this.state.pictures;
        formData.append("file", this.state.pictures[0]);
        axios.post("/users/profile/" + this.state.id, formData, {headers: {
            'Content-Type': 'multipart/form-data'
          }})
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log('signup error: ');
            console.log(error);
        })
    };

    componentDidMount() {
        axios.get("/users/profile/" + this.state.id)
        .then(res => {
            console.log(res.data);
            // if (response.data.interest) {
            //     this.setState({
            //         q1: response.data.interest.q1,
            //         q2: response.data.interest.q2,
            //         q3: response.data.interest.q3,
            //         q4: response.data.interest.q4,
            //         q5: response.data.interest.q5,
            //         location: response.data.location,
            //         profilepicture: response.data.profilepicture
            //     });
            // }
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
                        {this.state.pictures.map(picture => (<img key={picture.name} src={URL.createObjectURL(picture)} alt={picture.name}/>))}
                    </div>
                    <div className="display-left">
                    <ImageUploader
                        withIcon={true}
                        singleImage={true}
                        buttonText='Choose Image'
                        onChange={this.onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                    />
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