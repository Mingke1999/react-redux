import React, { Component } from 'react'
/**
 * link redux to read data
 */
import { connect } from 'react-redux'

class Hello extends Component {
  render() {
    return (
      <div>
        <h3>Hello</h3>
        <p>{this.props.count}</p>
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return state;
}
export default connect(mapStateToProps)(Hello)