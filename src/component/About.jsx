import React, { Component } from 'react'
import { connect } from 'react-redux'

class About extends Component {
  render() {
    return (
      <div>
        <h3>About</h3>
        <p>{this.props.count}</p>
      </div>
    )
  }
}
const mapStateToProps = state =>{
    return state.count;
  }
  export default connect(mapStateToProps)(About)