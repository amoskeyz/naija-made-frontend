import React, { Component } from 'react'
import './index.scss'
import carts from '../../cart'

class tiles extends Component {
  constructor()
  {
    super();
    this.state = {
      chart: 0
    }
  }

  componentDidMount(){
    this.setState({
      chart: carts.length
    })
  }

  componentDidUpdate(){
    if(this.state.chart !== carts.length){
      this.setState({
        chart: carts.length
      })
    }
  }

  render() {
    return (
      <div className='tiles'>{this.state.chart}</div>
    )
  }
}



export default tiles;
