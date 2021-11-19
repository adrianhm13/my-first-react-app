/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class MyComponent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.props.onButtonClicked}>Click me!</button>
            </div>
        );
    }
}

export default MyComponent;