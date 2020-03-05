import React from "react"

export default class Refs extends React.Component {
    constructor() {
        super();
        this.state = {
            newRef: ""
        }
    }
    updateRef() {
        this.setState({
            newRefA: this.refs.newRefA.value, // targetting the refs of each input
            newRefB: this.refs.newRefB.value
        })
    }
    render() {
        return (
            <div>
                <input 
                    ref="newRefA"
                    type="text" 
                    onChange= {
                        this.updateRef.bind(this)
                    } 
                /> <h1>{this.state.newRefA}</h1>
                <hr />
                <input 
                    ref="newRefB"
                    type="text"
                    onChange={
                        this.updateRef.bind(this)
                    }
                /> <h1>{this.state.newRefB}</h1>
            </div>
        )
    }
}