import React, { Fragment } from 'react'
import './index.scss'

const Description = ({ details }) => {
  return(
    <Fragment>
      <div className='flex container'>
        <div className = 'toppp'>
          <h5 className=''> Product Description</h5>
          <hr />
          <p className=''>{details.description}</p>
        </div>
        <div className ='desi' style={{textAlign: 'center'}}>
          <div>
            <h5>Seller Information</h5>
            <hr />
          </div>
          <h6>Name: Amos Oruaroghene</h6>
          <h6>Email:<a href='#'> inspiron.amos@gmail.com</a></h6>
          <h6>Phone: +2347084324266</h6>
          <h6>View more Seller&apos;s Information <a href = '#'>here</a></h6>
        </div>
      </div>
    </Fragment>
  )
}

export default Description;
