import React, { Component } from 'react'
import Counter1 from './Counter1'

class TryParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            display:true
        }
    }
    delete = () => {
        this.setState( { 
            display:false
        })
    } 
    
    render() {
        return (
            <div>
                <h2>
                    { this.state.display && <Counter1 />}
                    <button onClick={ this.delete }>Click</button>
                    Delete the Component
                </h2>
            </div>
        )
    }
}
export default TryParent




