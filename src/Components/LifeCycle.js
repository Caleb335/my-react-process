import React from 'react';

export default class LifeCycle extends React.Component {
    UNSAFE_componentWillMount() {   // "componentWillMount() in non-strict mode"
        console.log('Component Will Mount')
    }
    componentDidMount() {
        console.log('Component Did Mount!')
        this.getData()
    }
    getData = () => {
        // make an API call for data.
    }

    render() {
        return (
            <div>
                <h1>Mounting Lifecycle methods in action!</h1>
            </div>
        )
    }
}