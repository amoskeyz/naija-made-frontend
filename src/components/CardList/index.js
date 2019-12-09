import React from 'react'
import './index.scss';
import Spinner from '../Spinner/index'

const CardList = (props) => {
  return (
    <div className= 'card-item'>
      {
        props.card?
          <div>
            <img src ={props.card.image} alt = 'image'/>
            <hr/>
            <div style={{color:'orange', fontWeight: 'bold', opacity: '1'}}>{props.card.title}</div>
            <p style ={{opacity: 1}}><span>&#8358;</span>{props.card.price}</p> 
          </div>: 
          <div>
            <div className ='spin'><Spinner/></div>
            <hr/>
            <div style={{color:'orange', fontWeight: 'bold', opacity: '0'}}>bmbnbmnm</div>
            <p style ={{opacity: 0}}>jhjgjg</p> 
          </div>
      }
    </div>
  )
}

export default CardList;
