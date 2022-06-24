import React, { Component } from 'react'

export default class Child1 extends Component {
  state = {
      message:"message from child 1"
    }
  
  sendHandle = () =>{
    this.props.onEvent(this.state.message)
  }
  render() {
    return (
      <div>
        <h3>CHILD 1</h3>
        <p>{this.props.title}</p>
        <button onClick={this.sendHandle}>SEND TO PARENT</button>
      </div>
    )
  }
}
