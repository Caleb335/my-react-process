import React from "react";
import ReactDOM from "react-dom";

function tick () {
    const timeFrame = (
        <div>
            <h1>Hello Mr. Moose!</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    )
    ReactDOM.render (
        timeFrame, document.getElementById("root")
    );
}
setInterval(tick, 1000);