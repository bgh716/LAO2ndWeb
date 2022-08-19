import React, { useState, useEffect } from 'react';
import './Table.css';

function Table({id,name,gPrice,cPrice,quantity,ratio}){
  return (
    <div className="container">
      <div classNmae="imageName">
        <img classNmae="image" src={"itemImages/" + id + ".png"}></img>
        <h5 classNmae="name">{name}</h5>
      </div>
      <div>
        <h3 className="value">{gPrice}</h3>
      </div>
      <div>
        <h3 className="value">{cPrice}</h3>
      </div>
      <div>
        <h3 className="value">{quantity}</h3>
      </div>
      <div>
        <h3 className="value">{ratio}</h3>
      </div>
    </div>
  )
}

export default Table;
