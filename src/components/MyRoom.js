import React from "react";
import '../App.css';
import TodoContainer from "./TodoContainer";

function MyRoom() {
    const [isOn, setLight] = React.useState(true);
    const luminosity = isOn ? "light" : "dark";
    return (
        <div className={`container MyRoom ${luminosity}`}>
        The theme of the room is in {isOn ? 'light' : 'dark'}
            <br />
            <button onClick={() => setLight(!isOn)}>Flip It</button>
            <TodoContainer />
        </div>
    );
}


export default MyRoom

