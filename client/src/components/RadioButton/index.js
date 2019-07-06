import React from "react";

function RadioButton(props) {

    return (
        <label>
            <input className="radiobtn"
                type="radio"
                name={props.name}
                value={props.value}
                // key={props.key}
                onChange={props.selected}
            />
            {props.buttonName}
        </label>
    );
};

export default RadioButton;