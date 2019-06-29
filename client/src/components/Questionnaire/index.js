import React, { Component } from 'react';
import "./style.css";
import RadioButton from "../RadioButton"



class Questionnaire extends Component {

    state = {
        buttonArray: [
            { value: "1", buttonName: "1" },
            { value: "2", buttonName: "2" },
            { value: "3", buttonName: "3" },
            { value: "4", buttonName: "4" },
            { value: "5", buttonName: "5" }
        ],
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: ""
    }

    handleSubmit = () => {
        console.log("Hi");
    }

    render() {
        return (
            <div id="container">

                <h1>Questionnaire</h1>

                <p>1. I am interested in meeting up at least once a week.</p>
                <form id="q1">
                    {this.state.buttonArray.map(item => (
                        <RadioButton key={item.value}
                            value={item.value}
                            name="q1"
                            buttonName={item.buttonName} />
                    ))}
                </form>

                <p>2. I want to meet in-person.</p>
                <form id="q2">
                    {this.state.buttonArray.map(item => (
                        <RadioButton key={parseInt(item.value) + 6}
                            value={item.value}
                            name="q2"
                            buttonName={item.buttonName} />
                    ))}
                </form>

                <p>3. This industry is a hobby for me as opposed to my profession.</p>
                <form id="q3">
                    {this.state.buttonArray.map(item => (
                        <RadioButton key={parseInt(item.value) + 12}
                            value={item.value}
                            name="q3"
                            buttonName={item.buttonName} />
                    ))}
                </form>

                <p>4. I am a beginner in this industry and am hoping to advance my skills quickly.</p>
                <form id="q4">
                    {this.state.buttonArray.map(item => (
                        <RadioButton key={parseInt(item.value) + 18}
                            value={item.value}
                            name="q4"
                            buttonName={item.buttonName} />
                    ))}
                </form>

                <p>5. I would like structured mentor meetings with a schedule or agenda.</p>
                <form id="q5">
                    {this.state.buttonArray.map(item => (
                        <RadioButton key={parseInt(item.value) + 24}
                            value={item.value}
                            name="q5"
                            buttonName={item.buttonName} />
                    ))}
                </form>

                <button id="done" type="submit" value="text" onClick={this.handleSubmit}>Done</button>
            </div>
        );
    };
}

export default Questionnaire;