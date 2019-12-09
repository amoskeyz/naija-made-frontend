import React from 'react';

class ProductImage extends React.Component{
  constructor(){
    super();
    this.state = {
      image: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.setState({
      image: this.props.details.image
    })
  }

  componentDidUpdate(){
    if(this.state.image !== this.props.details.image){
      this.setState({
        image: this.props.details.image
      })
    }
  }

  handleClick (e){
    e.preventDefault();
    this.setState({
      image: e.target.attributes[0].value
    });
  }

  render(){
    return(
      <div className='lef'>
        <img src = {this.state.image} />
        <div className = 'secImage'>
          <img src = {this.props.details.image} alt = 'ooo' onClick = {this.handleClick}/>
          <img src = {this.props.details.image} alt = 'first' onClick = {this.handleClick}/>
          <img  src = {this.props.details.image} alt = 'second'onClick = {this.handleClick}/>
          <img src = {this.props.details.image} alt = 'third' onClick = {this.handleClick}/>
        </div>
      </div>
    )
  }
}

export default ProductImage;
