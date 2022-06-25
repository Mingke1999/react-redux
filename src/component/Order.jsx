import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as orderActions from "../redux/action/order"
import { bindActionCreators } from 'redux'
export class Order extends Component {


addOrderHandle = () => {
    this.props.orderActions.addOrder({
        id:Math.floor(Math.random()*1000),
        title:"fish oil"
    })
}
delOrderHandle = (id) =>{
    this.props.orderActions.delOrder(id)
}
  render() {
    return (
      <div>
        <h2>Trolley</h2>
        <button onClick={this.addOrderHandle}>ADD</button>
        <ul>
            {
                this.props.order.map((ele)=>{
                    return <li key={ele.id}>
                       <span> {ele.title}-{ele.id}</span>
                       <button onClick={() => this.delOrderHandle(ele.id)}>DELETE</button>
                        </li>
                })
            }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    console.log(state.order)
  return state
}

const mapDispatchToProps = dispatch =>{
  return{
    orderActions:bindActionCreators(orderActions,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
