import React, { Component } from 'react'
import JobCard from '../components/JobCard'
import './style.css'
import axios from 'axios'

class Indeed extends Component {

    state = {
        loading: false,
        jobListings: []
    };

    indeedSearch = () => {

        this.setState({ loading: true });

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
            (response) => {
                console.log(response.data);
                this.setState({ jobListings: response.data, loading: false });
            }

        ).catch(err => console.log(err));
    }

    componentDidCatch() {
        this.indeedSearch();
    }

    render() {

        if (this.state.loading) {
            return (
                <p>Loading Search Results</p>
            );
        } else {
            return (
                <div className="job-wrapper">
                    <button onClick={this.indeedSearch}>Indeed Search</button>

                    {this.state.jobListings.map((job, index) => (
                        <JobCard key={index}
                            title={job.title}
                            summary={job.summary}
                            url={job.url}
                        />
                    ))}
                </div>
            )
        }
    }
}

export default Indeed