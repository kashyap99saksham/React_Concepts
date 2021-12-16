import React, { Component } from 'react'

class ClassClick extends Component {

    constructor(){
        super()
        this.state = {
            name:"name1"
        }
    }
    
    clickHandler() {
        console.log("User clicked");
        console.log(this);

        // this.setState({
        //     name:"saksham"
        // })

    }

    render() {
        return (
            <div>
                <button onClick = { this.clickHandler }>Click</button>
            </div>
        )
    }
}

export default ClassClick





