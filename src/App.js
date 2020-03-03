import React from 'react';


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            greet: "Welcome to this state",
            cat:  "How well do you know meerkats"
        }
    }
    Update(e) {
        this.setState({
            greet: e.target.value,
            cat: e.target.value
        })
    }
    render() {
        return(
            <div>
                <input type="text" onChange={this.Update.bind(this)}/>
                <h1>{this.state.greet} - {this.state.cat}</h1>
            </div>
        )
    }
}

// export default class App2 extends React.Component {
//     render() {
//         return(
//             <Title  text="The book shop"/>
//         )
//     }
// }

// const Title = () => {
//     return(
//         <h1>Title: {props.text}</h1>
//     )
// }

// Title.props = {
//     text(props, propName, component) {
//         if(!(propName in props)) {
//             return new Error(`${propName} is missing, where did you put eba!`)
//         }
//         if(props[propName].length < 6) {
//             return new Error(`${propName} is too short`)
//         }
//     }
// }