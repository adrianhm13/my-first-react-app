import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Hello'
        }
        // this.clickHandler = this.clickHandler.bind(this) // Most typical way to bind, React documentation
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {  //Binding with arrow function in the method
        this.setState({
            message: 'Goodbye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> Performance issues in large apps */}
                {/* <button onClick={()=> this.clickHandler()}>Click</button> Performance issues in large apps */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
