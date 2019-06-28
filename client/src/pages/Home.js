import React, { Component } from 'react'
import './style.css'

class Home extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id="carouselExampleInterval" className="carousel slide container-fluid" data-ride="carousel">
                    <img src={require("../images/home.jpg")} className="d-block w-100 home-image" alt="..." />
                    <div>
                        <div class="centered text-center">Start Your Journey With Real World Guidance</div>
                    </div>
            </div>
        )
    }
}

export default Home
