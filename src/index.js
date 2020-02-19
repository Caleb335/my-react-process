import React from 'react';
import ReactDOM from 'react-dom';

function MyInfo() {
    return (
        <div>
            <h1>Seven</h1>
            <p>Blah blah blah blah blah blah....</p>
            <ul>
                <li>San Francisco CA</li>
                <li>The Recurse Center NYC</li>
                <li>Detroit IL</li>
            </ul>
        </div>
    )
}

ReactDOM.render(
    <MyInfo />,
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

