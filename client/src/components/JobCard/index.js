import React from "react";
import "./style.css"

function JobCard(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted"></h6>
                <p className="card-text">{props.summary}</p>
                <a href={props.url} className="card-link" target="_blank">Job Link</a>
                {/* <a href="#" className="card-link">Another link</a> */}
            </div>
        </div>
    );
}

export default JobCard