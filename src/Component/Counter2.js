import React, { Component } from 'react'

class Counter2 extends Component {
    shouldComponentUpdate(nextProps)    {
        if(nextProps.value !== this.props.value )   {
            return true;
        }   
        else {
            return false;
        }
    }
    render() {
        console.log("Counter-2 is invoked");
        return (
            <div>
                <h2>This is our Counter-2</h2>
                <h2>{this.props.value}</h2>
                <button onClick={this.props.onClick}>Add</button>
            </div>
        )
    }
}
export default Counter2