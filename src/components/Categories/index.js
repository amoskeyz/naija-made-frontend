import React, { Component } from 'react';
import './index.scss';
import {Link } from 'react-router-dom'
import ProductList from './ProductList';
import User from './User';
import CarouselPage from './CarouselPage';
import List from './List';
import details from '../../details'


export class Categories extends Component {
  render() {
    return (
      <div className="fll">
        <div style={{display:'flex'}} className='flex'>
          {/* <div className='show'>Details</div> */}
          <ProductList />
          <div className='imageScroll'>
            {/* <div className = 'coura'> */}
            <CarouselPage />
            {/* </div> */}
            <div className = 'list'>
              <Link to = {`/product/${details[10].id}`}><List details = {details[10]}/></Link>
              <Link to = {`/product/${details[9].id}`}><List details = {details[9]}/></Link>
              <Link to = {`/product/${details[8].id}`}><List details = {details[8]}/></Link>
              <Link to = {`/product/${details[7].id}`}><List details = {details[7]}/></Link>
              <Link to = {`/product/${details[2].id}`}><List details = {details[2]}/></Link>
            </div>
          </div>
          <div className = 'user'>
            <User />
          </div>
        </div>
      </div>
    )
  }
}

export default Categories;
