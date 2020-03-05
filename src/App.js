import React from 'react';
import LifeCycle from './Components/LifeCycle';
import Well  from './Components/Well';
import Refs from './Components/Refs';

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
                <Refs />
                <hr />
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
                <hr />
                <LifeCycle />
                <hr />
                <Well />
            </div>
        )
    }
}


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