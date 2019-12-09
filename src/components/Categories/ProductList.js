import React, { Component } from 'react';
import { MdPhoneAndroid } from 'react-icons/md';
import { FaShoePrints, FaCarAlt } from 'react-icons/fa';
import { GiElectric, GiTShirt, GiFruitBowl, GiWoodenSign } from 'react-icons/gi'

class ProductList extends Component {
  render() {
    return (
      <div className='categoryList'>
        <ul>
          {/* <GiElectric/> */}
          <label>Product Categories</label>
          <hr/>
          <li><GiElectric /> Electronics</li>
          <li><MdPhoneAndroid /> Phone</li>
          <li><GiTShirt /> Cloths</li>
          <li><FaShoePrints /> Shoes</li>
          <li><FaCarAlt /> Vehicles</li>
          <li><GiFruitBowl /> Food</li>
          <li><GiWoodenSign /> Furniture</li>
          <li><GiElectric /> Renewable Energy</li>
          {/* <div className='show'>Details</div> */}
        </ul>
      </div>
    )
  }
}

export default ProductList;
