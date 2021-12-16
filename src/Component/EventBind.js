import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello Prepbytes!'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler() {
    //     this.setState({
    //         message: 'Good Eve People!'
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: 'Good Eve People!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick = { this.clickHandler.bind(this) }>Click 1</button>
                <button onClick = { () => this.clickHandler() }>Click 2</button>
                
                <button onClick = { this.clickHandler }>Click 3</button>

                <button onClick = { this.clickHandler }>Click 4</button>
                

            </div>
        )
    }
}

export default EventBind




// 1. this.clickHandler.bind(this)
// 2.  () => this.clickHandler() 
// 3. this.clickHandler || this.clickHandler = this.clickHandler.bind(this)
// 4. use Arrow Function