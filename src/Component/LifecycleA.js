import React, { Component } from 'react'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Doremon'
        }
        console.log("Lifecycle Construtor");
    }
    
    static getDerivedStateFromProps(props,state)    {
        return {
            name: props.name
        }
    }
    componentDidMount() {
        console.log('Component Mounted SuccessFully!');
    } 

    render() {
        console.log('LifeCycle Render');
        let btn = <button>Click</button>
        return (
            <div>
                hiiiiii
                hiiiiii
                hiiiiii
                hiiiiii
                hiiiiii
                hiiiiii
                hiiiiii
            </div>
        )
    }
}

export default LifecycleA



// Mouting  - constructor, static getDerivedStateFromProps, render(), componentDidmount
// Updating - static getDerivedStateFromProps, render, shouldComponentUpdate, componentDidUpdate, getSnapshotBeforeUpdate
// UnMouting - componentWillUnmount