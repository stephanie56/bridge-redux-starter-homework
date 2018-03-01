import React from 'react';

export const Form = ({submitForm, updateProduct}) => {
  return (
    <div>
      <div>Name: <input type="text" onChange={(e) => {updateProduct('name', e.target.value)}}/></div>
      <div>Department: <input type="text" onChange={(e) => {updateProduct('department', e.target.value)}}/></div>
      <div>Price: <input type="text" onChange={(e) => {updateProduct('price', e.target.value)}}/></div>
      <div>Stock: <input type="text" onChange={(e) => {updateProduct('stock', e.target.value)}}/></div>
      <div>Type: <input type="text" onChange={(e) => {updateProduct('type', e.target.value)}}/></div>
      <button onClick={() => submitForm()}>Submit Product</button>
    </div>
  )
};
