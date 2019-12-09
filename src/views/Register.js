import React, { Component, Fragment } from 'react';
import './index.scss'
import SignUp from '../components/SignUp/index'

class Register extends Component {
  render() {
    return (
      <Fragment>
        <div className = 'amii'>
          {/* <img src ='../../images/14.jpg'/> */}
          <SignUp />
        </div>
      </Fragment>
    )
  }
}

export default Register;
