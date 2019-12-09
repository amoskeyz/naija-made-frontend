import React from 'react';
import { MdRemoveShoppingCart } from 'react-icons/md'
import AltSection from '../components/AltSection/index'
import Chart from '../cart'
import MainNav from '../components/MainNav/index'

const Carts = ()=>{
  return(
    Chart.length > 0 ?
      <div style={{background: 'rgb(223,226,235)', minHeight: '1500px'}}>
        <MainNav />
        <AltSection type = 'Carts Item' length ={Chart.length} details ={Chart}/>
      </div> :
      <div style={{background: 'rgb(223,226,235)', minHeight: '870px'}}>
        <MainNav />
        <div className = 'no-cart'><MdRemoveShoppingCart /></div>
        <div className='pp'>No Item Available</div>
      </div>
  )
}

export default Carts;
