import React, { Component } from 'react'
import UserProfile from '../components/UserProfile/Index'
import './style.css'
import axios from 'axios'

class Indeed extends Component {

    indeedSearch() {

        const queryOptions = {
            host: 'www.indeed.com',
            query: 'Software',
            city: 'Seattle, WA',
            radius: '25',
            level: 'entry_level',
            jobType: 'fulltime',
            maxAge: '7',
            sort: 'date',
            limit: 100
        };

        axios.get("/indeedscraper", {
            params: {
                queryOptions: queryOptions

            }
        }).then(
            function (response) {
                console.log(response);
            }

        ).catch(err => console.log(err));
    }

    render() {
        return (
            <button onClick={this.indeedSearch}>Indeed Search</button>
        )
    }
}

export default Indeed