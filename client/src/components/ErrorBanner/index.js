import React from "react";

function ErrorBanner(props) {
    return (<div className="alert alert-danger" role="alert">
        {props.children}
    </div>)
}

export default ErrorBanner;