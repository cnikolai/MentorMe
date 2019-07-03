import React, { Component } from 'react'
import JobCard from '../components/JobCard'
import Wrapper from '../components/Wrapper'
import './style.css'
import axios from 'axios'

class Indeed extends Component {

    state = {
        jobBox: "",
        cityBox: "",
        loading: false,
        jobListings: []
    };

    indeedSearch = () => {

        this.setState({ loading: true, jobListings: [] });

        const queryOptions = {
            host: 'www.indeed.com',
            query: this.state.jobBox,
            city: this.state.cityBox,
            radius: '25',
            level: 'entry_level',
            jobType: 'fulltime',
            maxAge: '7',
            sort: 'date',
            limit: 25
        };

        console.log(queryOptions);
        axios.get("/indeedscraper", {
            params: {
                queryOptions: queryOptions

            }
        }).then(
            (response) => {
                console.log(response.data);
                this.setState({ jobListings: response.data, loading: false });
            }

        ).catch(err => console.log(err));
    }

    handleJobChange = event => {
        this.setState({ jobBox: event.target.value });
    }

    handleCityChange = event => {
        this.setState({ cityBox: event.target.value });
    }

    render() {

        if (this.state.loading) {
            return (
                <div className="loading-div">
                    <p>Loading Search Results</p>
                </div>
            );
        } else {
            return (
                <div className="job-wrapper">
                    Job: <input type="text" value={this.state.jobBox} onChange={this.handleJobChange}></input>
                    City: <input type="text" placeholder="Los Angeles, CA" value={this.state.cityBox} onChange={this.handleCityChange}></input>
                    <button onClick={this.indeedSearch}>Indeed Search</button>

                    <Wrapper>
                        {this.state.jobListings.map((job, index) => (
                            <JobCard key={index}
                                title={job.title}
                                summary={job.summary}
                                url={job.url}
                            />
                        ))}
                    </Wrapper>

                </div>
            )
        }
    }
}

export default Indeed