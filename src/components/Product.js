import React from 'react';

export const Product = ({id, name, department, price, stock, type,  remove}) => {
  debugger;
  return (
    <div>
      <h3>{name}</h3>
      <div>Department: {department}</div>
      <div>Price: {price}</div>
      <div>Stock: {stock}</div>
      <div>Type: {type}</div>
      <button onClick={() => remove(id)}>Delete Product</button>
    </div>
  );
};
