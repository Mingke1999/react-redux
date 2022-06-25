import React, { Component } from 'react'
import {addCount,minCount} from "../redux/action/count"
/**
 * link redux to read data
 */
import { connect } from 'react-redux'

class Hello extends Component {
  addHandle = () =>{
    this.props.addCount()
  }
  minHandle = () =>{
    this.props.minCount()
  }
  render() {
    return (
      <div>
        <h3>Hello</h3>
        <p>{this.props.count}</p>
        <button onClick={this.addHandle }>INCREMENT</button>
        <button onClick={this.minHandle }>DESCREASE</button>
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return state;
}

const mapDispatchToPros = dispatch =>{
  return{
    addCount:() =>{dispatch(addCount())},
    minCount:() =>{dispatch(minCount())}
  }
}
//read before write
export default connect(mapStateToProps,mapDispatchToPros)(Hello)