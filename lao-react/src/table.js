import React, { useState, useEffect } from 'react';
import './Table.css';

function Table({id,name,gPrice,cPrice,quantity,crystal,bundle}){
  function rat(gold){
    const rate = ((cPrice/95)*(crystal/quantity))/(gold/bundle);
    //(cPrice/95) = value of 1 crystal(in gold)
    //(crystal/quantity) = value of crystal per 1 item
    //(gPrice/bundle) = value of gold per 1 item
    return rate;
  }
  const [price, setPrice] = useState(gPrice);
  const [ratio, setRatio] = useState(rat(gPrice));

  useEffect(() => {
    setRatio(rat(price));
  }, [price]);

  const valueEntered = (e) => {
    setPrice(e.target.value)
  }
  return (
    <div className="container">
      <div className="imageName">
        <img className="itemImage" src={"itemImages/" + id + ".png"}></img>
        <h5 className="name">{name}</h5>
      </div>
      <div>
        <input className="valueIn" type="number" value={price} onChange={valueEntered}></input>
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
