import React, { Component } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import Button from '../Button/index';
// import CarouselPage from './CarouselPage';

class User extends Component {
  render() {
    return (
      <div>
        <div className='userIcon'>
          <FaUserCircle />
        </div>
        <div className='bnt'>
          <Button type = 'Register' link = 'signup'/>
          <Button type = 'Login' link ='login'/>
        </div>
        {/* Proudly Nigeria */}
        {/* <CarouselPage/> */}
        {/* <div className ='imagg'> */}
        {/* <img src ='../../1.jpg' alt ='amos' /> */}
        {/* </div> */}
      </div>
    )
  }
}

export default User;
