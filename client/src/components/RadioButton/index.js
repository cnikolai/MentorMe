import React from "react";

function RadioButton(props) {

    return (
        <label>
            <input className="radiobtn"
                type="radio"
                name={props.name}
                value={props.value}
                key={props.key}

            />
            {props.buttonName}
        </label>
    );
};

export default RadioButton;