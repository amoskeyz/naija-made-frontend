import React from 'react';


const Input = (props) => {
//   console.log(props.value)
  return(
    <input 
      type ={props.inputType}
      id = {props.id}
      onChange = {props.onChange}
      value = {props.value}
      required ={true}
      className = 'form-control'
      placeholder = {props.placeholder}
    //   style ={{width: '50%'}}
    />
  )
}

export default Input;
