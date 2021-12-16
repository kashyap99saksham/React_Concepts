import React, { Component } from 'react'

class Message extends Component {

    constructor()   {
        super();
        this.state = {
            isLogedIn: 'NOPE',
        }
    }
    changeMessage() {
        console.log("clicked",this);
        this.setState(
            {
                isLogedIn:"YESSSS!"
            }
        )
    }
    render() {
        return (
            <div>
                {this.state.isLogedIn}
                <button onClick={ () => this.changeMessage() }>Login ?</button>
            </div>
        )
    }
}

export default Message



// 1. Webpage Component (with Arrow Function)  
//             /    \
//         Header Footer


// 2. Header Component (with Arrow Function) 
// 3. Footer Component (with Class) [Button] 
//        |
//        |
//       use STATE (logedIn) [Change Text] 
