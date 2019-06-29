import React from 'react';
//import { Redirect } from 'react-router-dom';
//import { Route, Link } from 'react-router-dom';
import "./style.css";

function Questionnaire() {
    return (
        <div id="container">

            <h1>Questionnaire</h1>

            <p>1. I am interested in meeting up at least once a week.</p>
            <form>
            <input className="radiobtn" type="radio" name="meetoften" value="1" /> 1
            <input className="radiobtn" type="radio" name="meetoften" value="2" /> 2
            <input className="radiobtn" type="radio" name="meetoften" value="3" /> 3
            <input className="radiobtn" type="radio" name="meetoften" value="4" /> 4
            <input className="radiobtn" type="radio" name="meetoften" value="5" /> 5
            </form>

            <p>2. I want to meet in-person.</p>
            <form>
            <input className="radiobtn" type="radio" name="meetoften" value="1" /> 1
            <input className="radiobtn" type="radio" name="meetoften" value="2" /> 2
            <input className="radiobtn" type="radio" name="meetoften" value="3" /> 3
            <input className="radiobtn" type="radio" name="meetoften" value="4" /> 4
            <input className="radiobtn" type="radio" name="meetoften" value="5" /> 5
            </form>

            <p>3. This industry is a hobby for me as opposed to my profession.</p>
            <form>
            <input className="radiobtn" type="radio" name="meetoften" value="1" /> 1
            <input className="radiobtn" type="radio" name="meetoften" value="2" /> 2
            <input className="radiobtn" type="radio" name="meetoften" value="3" /> 3
            <input className="radiobtn" type="radio" name="meetoften" value="4" /> 4
            <input className="radiobtn" type="radio" name="meetoften" value="5" /> 5
            </form>

            <p>4. I am a beginner in this industry and am hoping to advance my skills quickly.</p>
            <form>
            <input className="radiobtn" type="radio" name="meetoften" value="1" /> 1
            <input className="radiobtn" type="radio" name="meetoften" value="2" /> 2
            <input className="radiobtn" type="radio" name="meetoften" value="3" /> 3
            <input className="radiobtn" type="radio" name="meetoften" value="4" /> 4
            <input className="radiobtn" type="radio" name="meetoften" value="5" /> 5
            </form>

            <p>5. I would like structured mentor meetings with a schedule or agenda.</p>
            <form>
            <input className="radiobtn" type="radio" name="meetoften" value="1" /> 1
            <input className="radiobtn" type="radio" name="meetoften" value="2" /> 2
            <input className="radiobtn" type="radio" name="meetoften" value="3" /> 3
            <input className="radiobtn" type="radio" name="meetoften" value="4" /> 4
            <input className="radiobtn" type="radio" name="meetoften" value="5" /> 5
            </form>

            <button id="done" type="submit" value="text">Done</button>
        </div>
    );
}

export default Questionnaire;