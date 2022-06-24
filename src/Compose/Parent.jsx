import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
export default class Parent extends Component {

constructor(){
    super();
    this.state = {
        title:"message from parent",
        message:""
    }
}

onEvent = (data) =>{
    console.log(data);
    this.setState({
        message:data
    })
}
  render() {
    return (
      <div>
        <h2>PARENT</h2>
        <p>{this.state.message}</p>
        <Child1 title={this.state.title} onEvent={this.onEvent}/>
        <Child2/>
      </div>
    )
  }
}
