import React from 'react';

// handling events with state
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentEvent: "----"
        }
        this.update = this.update.bind(this)
    }
    update(e) {
        this.setState({
            currentEvent: e.type
        })
    } 
    
    render() {
        return(
            <div>
                <textarea 
                    cols="30"
                    row="10"
                    onKeyPress = {this.update}
                    onMouseDown={this.update}
                    onMouseOver={this.update}
                    // onBeforeInput={this.update}
                    onCopy={this.update}
                    onCut={this.update}
                    onPaste={this.update}
                />
                <h1>{this.state.currentEvent}</h1>
            </div>
        )
    }
}



// // state 
// export default class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             greet: "Welcome to this state",
//             cat:  "How well do you know meerkats"
//         }
//     }
//     Update(e) {
//         this.setState({
//             greet: e.target.value,
//             cat: e.target.value
//         })
//     }
//     render() {
//         return(
//             <div>
//                 <input type="text" onChange={this.Update.bind(this)}/>
//                 <h1>{this.state.greet} - {this.state.cat}</h1>
//             </div>
//         )
//     }
// }

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