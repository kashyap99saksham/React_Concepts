import React, { Component } from 'react'

class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    changeState = () => {
        this.setState({
            isLoggedIn: true
        })
    }
    render() {
        let data;
        // if(this.state.isLoggedIn) {
        //     data = <h1> Mohan </h1>
        // }
        // else {
        //     data = <h1> Guest </h1>
        // }

        return (

            this.state.isLoggedIn ?

                <div>
                    <h1>1111</h1>
                    <h1>1111</h1>
                    <h1>1111</h1>
                    <h1>1111</h1>
                    <h1>1111</h1>
                    <h1>1111</h1>
                </div>

                : null

        )
    }
}
export default Header




// username === 'yourName' -> true -> <h1>Welcome</h1>
// username != 'yourName' -> false -> <h1>LogIn</h1>



// class Header1 extends Component {
//      constructor(props) {
//           super(props) 
//           this.state = { 
//               yourName: "Sidhant" 
//             } 
//         } 
//         // changeState=()=>{
//              // console.log("clicked",this);
//             // this.setState({ // isLoggedIn: true // }) // } 
//         render() { 
//             let data; 
//             if(this.state.yourName == "Sidhant")    { 
//                 data = <h1>Welcome! Sidhant</h1> 
//             } else { 
//                 data = <h1>Please Login Guest!</h1> 
//             } 
//             return (
//                  <div> { data }
//                  {this.state.isLoggedIn} 
//                  {/* <button onClick = { () => this.changeState }>CLick</button> */} 
//                  </div> 
//                  ) 
//                 } 
//             } 
//             export default Header1; 





// Mouting - 1. Constructor(), 2. static getDerivedStateFromProps, 3. render(), 4. componentDidMount()

// Updating -  
// 1. static getDerivedStateFromProps  
// 2. ShouldComponentUpdate
// 3. Render() 
// 4. getSnapshotBeforeUpdate  
// 5. componentDidUpdate



// UnMount -  { ... }

// 1.Constructor() - 1.initialized state, 2.Binding Event
// 2.static getDerivedStateFromProps() - when the state of our Component totally depends on changes in props. 1. setting out state
// 3.render() - read props/state, return JSX
// 4. componentDidMount() - 


// Updating
