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