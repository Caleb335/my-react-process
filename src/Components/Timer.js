import React from 'react';

export default class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            currentTime: new Date().getTime
        }
        this.click = this.click.bind(this)
    }
    click(e) {
        this.setState({
            currentTime: e.getHours
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.click}></button>
            </div>
        )
    }
}