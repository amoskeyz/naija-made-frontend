import React from 'react';
import {Link } from 'react-router-dom'
// import './index.scss';
import CardList from '../CardList/index';
// import details from '../../details'

const Section = (props) => {
  const a = [];
  // if(props.details.length > 1){
  for(let i = 1; i <= props.length; i += 1){
    if(props.details.length > 0){
      a.push(props.details[i -1])
      // console.log(a)
    } else a.push(i)
  }
  // console.log(props.length)
  return(
    <div className = 'flex ll container'>
      <div className ='container' style={{backgroundColor:'white', textAlign: 'center'}}>
        <h5>{props.type}</h5>
        <hr style={{padding: '0', margin: '0'}}/>
        {
          props.details.length > 0 ?
            a.map((b, index) => <Link to = {`/product/${b.id}`} key ={index} style = {{color:'black'}}><CardList key= {index} card ={b}/></Link>) :
            a.map((b, index) => <CardList key= {index}/>)
        //   details.map((b, index) => <CardList key= {index} card ={b}/>)
        }
      </div>
    </div>
  )
}

export default Section;
