import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
      <div className= 'item'>
        <img src ={this.props.details.image} alt = 'image'/>
        <hr/>
        <p>&#8358;{this.props.details.price}</p>
      </div>
    )
  }
}

export default List;
