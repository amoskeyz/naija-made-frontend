import React from 'react';

const Label = ({
  name,
  labelText
}) => {
  return(
    <label name ={name}>{labelText}</label>
  )
}

export default Label;
