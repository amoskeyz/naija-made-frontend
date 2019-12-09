import React from 'react'

const Shipping = ({ icon, details }) =>{
  return(
    <div className='flex' >
      <div className='radius'>
        <span className= 'icoon'>{icon}</span>
      </div>
      <p className='deeet'>{details}</p>
    </div>
  )
}

export default Shipping;
