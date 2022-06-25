import React, { Component } from 'react'

/**
 * link redux to read data
 */
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as CountActions from "../redux/action/count"

class Hello extends Component {

  constructor(){
    super();
    this.state = {
      num:0
    }
  }

  addHandle = () =>{
    this.props.countActions.addCount(Number(this.state.num))
  }
  minHandle = () =>{
    this.props.countActions.minCount(Number(this.state.num))
  }
  changeHandle = (e) =>{
    this.setState({
      num:e.target.value
    })
  }
  render() {
    return (
      <div>
        <h3>Hello</h3>
        <p>{this.props.count}</p>
        <input type="text" value={this.state.num} onChange={this.changeHandle}/>
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
    //addCount:(num) =>{dispatch(addCount(num))},
    //minCount:(num) =>{dispatch(minCount(num))}
    countActions:bindActionCreators(CountActions,dispatch)
  }
}
//read before write
export default connect(mapStateToProps,mapDispatchToPros)(Hello)