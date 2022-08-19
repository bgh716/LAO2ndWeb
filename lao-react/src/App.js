import './App.css';
import axios from "axios"
import React, { useState, useEffect } from 'react';
import Table from "./Table"

function App() {
  const columns = ["item", "gold price", "quantity", "crystal price", "rate(shows how much crystal is more expensive)"];
  const items_id = []
  for (var i = 0; i < 27; i++){
    items_id[i] = "i" + (i+1)
  }
  //axios callback function
  const [res, setRes] = useState(null);
  function getData(){
    axios.get("http://localhost:80/shop")
      .then(function (response) {
           setRes(response.data)
      }).catch(function (error) {
          console.log(error)
      });
  }
  useEffect(() => {
    getData();
  }, []);

  if (res != null){
    const list = items_id.map((v) => (<Table id={v} name={res.data[v]["name"]} gPrice={res.data[v]["price"]} cPrice={res.info[v]["cprice"]} quantity={res.info[v]["quantity"]} ratio={0} />))
    return(
      <div>
        {list}
      </div>
    )
  }

  return "Loading Screen...."
}

export default App;
