import React,{Component} from "react";

class Welcome extends Component {
    render() {
        // console.log(this.props);
        return (
            <div>
                My name is - {this.props.children}<br />  
                {/* a.k.a {this.props.lastName} */}
            </div>
        )
    }
}
export default Welcome

//  1. Extend
//  2. implement the render() method, return null or JSX

// 'this'