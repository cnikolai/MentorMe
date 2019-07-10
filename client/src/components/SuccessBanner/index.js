import React from "react";

function SuccessBanner(props) {
    return (<div className="alert alert-success" role="alert">
        {props.children}
    </div>)
}

export default SuccessBanner;