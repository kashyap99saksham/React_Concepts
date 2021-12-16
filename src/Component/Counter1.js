import React, { Component } from 'react'

class Counter1 extends Component {

    componentWillUnmount()    {
       alert(' I will Kill You!!, If u remove Me ')
    }

    render() {
        return (
            <h1>
                Hello I m sad :-(
            </h1>
        )
    }
}
export default Counter1


