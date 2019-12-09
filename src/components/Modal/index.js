import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { MdBookmarkBorder, MdShoppingCart } from 'react-icons/md'
import './index.scss';
// import Tiles from '../Tiles/index'
import carts from '../../cart'

// console.log(<Tiles />)

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      isDialogOpen: false,
      product: {},
      totalPrice: '',
      inputValue: 1,
      price: '',
      cart: ''
    }
    this.openDialog = this.openDialog.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleSubstract = this.handleSubstract.bind(this)
    this.handleCart = this.handleCart.bind(this)
  }

  componentDidMount(){
    if(this.props.product){
      const total = (price) =>{
        const amount = price.split(',')
        return(Number(amount[0] + amount[1]))
      }
      this.setState({
        product: this.props.product,
        price: total(this.props.product.price),
        inputValue: 1
      })
    }
  }


  handleCart(){
    let mm;
    const aa = ({product}) => {
      const bb = carts.find(an => an.id === product.id);
      if(!bb) mm = carts.push(product)
      else  mm = alert('Item is Already Added to Cart')
      return mm;
    }
    aa(this.props);
    // console.log(carts)
  }
 
  openDialog(){
    this.dialog.showModal();
    const total = (price) =>{
      const amount = price.split(',')
      return(Number(amount[0] + amount[1]))
    }
    this.setState({
      isDialogOpen: true,
      totalPrice: total(this.state.product.price),
      inputValue: 1
    })
  }

  ref(ref){ this.dialog = ref }
 
  handleClose(){this.setState({ isDialogOpen: false })}

  handleAdd(){
    this.setState((prevState) =>  {
      prevState.inputValue += 1;
      prevState.totalPrice = this.state.price * this.state.inputValue;
      return(this.state);
    })
  }

  handleSubstract(){
    if(this.state.inputValue > 1)
    {this.setState((prevState) =>  {
      prevState.inputValue -= 1;
      prevState.totalPrice = this.state.price * this.state.inputValue;
      return(prevState.inputValue + 1)
    })
    }
  }
 
  render() {
    return (
      <Fragment>
        <button type="button" onClick={this.openDialog}><MdBookmarkBorder/>Order Now</button>
        <Link to = {`/product/${this.state.product.id}`}>
          <button link = 'signup' onClick = {this.handleCart}><MdShoppingCart/>Add to Chart</button>
        </Link>
        <div className="container modd">
          <dialog ref = {(ref) => this.ref(ref)}>
            <h5 style ={{textAlign: 'center'}}>New Order Request</h5>
            <hr />
            <div className = 'flex container'>
              <img src = {this.state.product.image}alt = ''/>
              <div>
                <div className='til'>{this.state.product.title}</div>
                <p className='amount'>&#8358;{this.state.product.price}</p>
                <h6>Quantity:   
                  <button onClick = {this.handleSubstract}>-</button>
                  <input onChange = {this.handleAdd} type ='text' style ={{width:'30px'}} value = {this.state.inputValue}/>
                  <button onClick = {this.handleAdd}>+</button>
                </h6>
                <hr />
                <span>Total Amount: <p className='amount'>&#8358;{this.state.totalPrice}</p></span>
                <button className='mm'>Proceed to pay</button>
                <button className='mm'>Contact Seller</button>
              </div>
            </div>
          </dialog>
        </div>
      </Fragment>
    );
  }
}

export default Modal;
