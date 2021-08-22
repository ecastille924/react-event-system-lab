// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

    handleChange = () => {
        console.log('Entering password...')
    }

    render() {
        return (
           <input onKeyUp={this.handleChange} type="password"/>
        )
    }
}
