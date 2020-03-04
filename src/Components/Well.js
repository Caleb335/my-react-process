import React from 'react';

export default class Well extends React.Component {
    constructor() {
        super();
        this.state = {
            greet: "Welcome to this state"
        }
    }
    update(e) {
        this.setState({
            greet: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.greet}</h1>
                <input type="text" />
            </div>
        )
    }
}