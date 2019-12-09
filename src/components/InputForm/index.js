import React from 'react';
import Label from '../Label/index';
import Input from '../Input/index'

const InputForm = (props) => {
  return (
    <div className ='col'>
      <Label labelText = {props.labelText} name ={props.name}/>
      <Input
        inputType ={props.inputType} 
        placeholder = {props.placeholder} 
        // autoComplete = 'off'
        onChange = {props.onChange} 
        id = {props.id}
        // value = {props.value}
      />
    </div>
  )

}

export default InputForm;
