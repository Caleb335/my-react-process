import React from 'react'
import ReactDOM from 'react-dom'

function Welcome(props) {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <p>You live at {props.address}</p>
        </div>
    )
}

function App() {
    return (
        <div>
            <Welcome name="Sara" address="4, Wall street" />
            <Welcome name="Seven" address="Jojomu island" />
            <Welcome name="Theo" address="parawiama island" />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)




// import React from "react";
// import ReactDOM from "react-dom";

// // function tick () {
// //     const timeFrame = (
// //         <div>
// //             <h1>Hello Mr. Moose!</h1>
// //             <h1>The time now is.... {new Date().toLocaleTimeString()}</h1>
// //         </div>
// //     )
// //     ReactDOM.render (
// //         timeFrame, document.getElementById("root")
// //     );
// // }
// // setInterval(tick, 1000);

// function Welcome(props) {
//     return(
//         <h1>Hello, {props.name}</h1>
//     )
// }

// function App () {
//     return (
//         <div>
//             <Welcome name="Sara" />
//             <Welcome name="Eba" />
//             <Welcome name="Sam" />
//             <Welcome name="Theo" />
//         </div>
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// );

// function Comment(props) {
//     return()
// }

