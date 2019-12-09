import React, { Component } from 'react';
import './index.scss';
import Top from '../components/Top/index';
import Description from '../components/Description/index';
import details from '../details';
import MainNav from '../components/MainNav/index';
import Footer from '../components/Footer/index';
import AltSection from '../components/AltSection/index';

class Items extends Component {
  constructor(){
    super();
    this.state = {
      viewed: []
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        viewed: details
      });
    }, 2000);
  }

  render() {
    const product = details.find(item =>
      item.id === Number(this.props.match.params.product_id)
    )

    return (
      <div style={{background: 'rgb(223,226,235)'}}>
        <MainNav />
        <Top details = {product}/>
        <Description details = {product} />
        <AltSection type = 'Recently Viewed' length ='3' details ={this.state.viewed}/>
        <Footer />
      </div>
    )
  }
}

export default Items;
