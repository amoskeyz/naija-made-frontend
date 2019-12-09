import React from 'react';
// import { MdBookmarkBorder, MdShoppingCart } from 'react-icons/md'
import { FiStar } from 'react-icons/fi'
import Variations from '../Variations/index';
import Modal from '../Modal/index'

const ProductDetails = ({ details }) => {
  // const uu = '23,77767.67';
  // const ans = uu.split(',')
  // console.log(Number(ans[0] + ans[1]))
  // console.log(Number('123.078'))
  return(
    <div className='rig'>
      <div className='til'>{details.title}</div>
      <p>Brand: <a href='#' >Amaztech</a> | <a href ='#'>other Products of Amaztech</a></p>
      <div className = 'rating'> <FiStar /><FiStar /><FiStar /><FiStar /><FiStar /> (no rating available)</div>
      <hr />
      <p className='amount'><span>Price: &#8358;</span>{details.price}</p>
      <p style = {{textDecoration: 'line-through', color: 'grey'}}><span>Price: &#8358;</span>{details.originalPrice}</p>
      <hr />
      <Variations />
      <hr />
      <div className='buut'>
        <Modal product = {details} />
      </div>
    </div>
  )
}

export default ProductDetails;
