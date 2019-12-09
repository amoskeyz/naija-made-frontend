import React, { Fragment } from 'react'
import './index.scss'
import { FiUmbrella } from 'react-icons/fi'
import { FaShippingFast } from 'react-icons/fa';
import { GiReturnArrow } from 'react-icons/gi'
import { AiOutlineSafetyCertificate } from 'react-icons/Ai'
import ProductDetails from '../ProductDetails/index';
import Shipping from '../Shipping/index';
import ProductImage from '../ProductImage/index'

class Top extends React.Component{
  render(){
    return(
      <Fragment>
        <div className = 'flex oo container'>
          <div className='topp'>
            <ProductImage details ={this.props.details} />
            <ProductDetails details ={this.props.details}/>
          </div>
          <div className='desi'>
            <div>
              <h5 className='h'>{`Shipping & Return`}</h5>
              <hr />
            </div>
            <Shipping details = 'Fast Delivery up to 7 - 9 Days' icon ={<FaShippingFast/>} />
            <Shipping details = 'Free return policy within 15days of purchase' icon ={<GiReturnArrow/>} />
            <Shipping details = '1 Year&apos;s Manufacturer Warranty' icon ={<AiOutlineSafetyCertificate />} />
            <Shipping details = 'Product You Can Always Trust' icon ={<FiUmbrella/>} />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Top;
