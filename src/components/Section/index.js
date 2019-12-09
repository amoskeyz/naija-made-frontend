import React from 'react';
import {Link } from 'react-router-dom'
import './index.scss';
import CardList from '../CardList/index';

const Section = (props) => {
  const a = [];
  for(let i = 0; i <= props.length; i += 1){
    if(props.details.length > 1){
      a.push(props.details[i])
    } else a.push(i)
  }

  return(
    <div className = 'll'>
      <h3 className='h3'>{props.type}</h3>
      <div className ='container'>
        {
          props.details.length > 1 ?
            a.map((b, index) => <Link to = {`/product/${b.id}`} key ={index} style = {{color:'black'}}><CardList key= {index} card ={b}/></Link>) :
            a.map((b, index) => <CardList key= {index}/>)
        }
      </div>
    </div>
  )
}

export default Section;
