import React from 'react';
import Navi from '../components/Nav/index';
import Category from '../components/Categories/index';
import Section from '../components/Section/index';
import Footer from '../components/Footer';
import details from '../details';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      top: [],
      best: [],
      recent: []
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        top: details
      });
    }, 2000);
    setTimeout(() => {
      this.setState({
        best: details
      });
    }, 4000);
    setTimeout(() => {
      this.setState({
        recent: details
      });
    }, 6000);
  }

  render(){
    return(
      <div>
        <Navi />
        <Category />
        <Section type = 'Top Viewed' length = '9' details={this.state.top}/>
        <Section type = 'Best Selling' length ='4' details={this.state.best}/>
        <Section type = 'Recently Added' length ='4' details ={this.state.recent}/>
        <Footer />
      </div>
    )
  }
}
export default App;
