import React from "react";

function WarningBanner(props) {
    return (<div className="alert alert-warning" role="alert">
        {props.children}
    </div>)
}

export default WarningBanner;