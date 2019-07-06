import React from "react";
import "./style.css"

function Chat() {
    return (
        <div className="bigcontainer">
            <h1 className="text-center">Chats</h1>
            <div className="container">
                <img src={require("../../images/avatar.png")} alt="Avatar" />
                <p className="text-right">Hello. How are you today?</p>
                <span className="time-right">11:00</span>
            </div>

            <div className="container darker">
                <img src={require("../../images/avatar.png")} alt="Avatar" className="right" />
                <p class="text-left">Hey! I'm fine. Thanks for asking!</p>
                <span class="time-left">11:01</span>
            </div>

            <div className="container">
                <img src={require("../../images/avatar.png")} alt="Avatar" />
                <p className="text-right">Sweet! So, what do you wanna do today?</p>
                <span className="time-right">11:02</span>
            </div>

            <div className="container darker">
                <img src={require("../../images/avatar.png")} alt="Avatar" className="right" />
                <p class="text-left">Maybe work on learning more React?</p>
                <span className="time-left">11:05</span>
            </div>

            <div class="input-group">
                <textarea class="form-control" aria-label="With textarea"></textarea>
                <button type="submit" className="btn btn-success">Send</button>
            </div>
            
        </div>
    );
}

export default Chat;