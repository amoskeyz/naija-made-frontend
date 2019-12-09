import React from 'react';
import './index.scss'

const NavButton = () => {
  // console.log(props)
  return(
    <div className='but'>
      <a href='#'>Recently Added</a>
      <a href='#'>Top Viewed</a>
      <a href='#'>Top Orders</a>
      <a href='#'>Best Selling</a>
    </div>
  )
}

export default NavButton;
