import './App.css';
import axios from "axios"
import React, { useState, useEffect } from 'react';
import Table from "./Table"
import Header from "./Header"

function App() {
  const items_id = []
  for (var i = 0; i < 27; i++){
    items_id[i] = "i" + (i+1)
  }
  //axios promise function
  const [res, setRes] = useState(null);
  function getData(){
    axios.get("http://34.125.169.162:5000/shop")
      .then(function (response) {
        setRes(response.data)
      }).catch(function (error) {
          console.log(error)
      });
  }

  useEffect(() => {
    getData();
  }, []);

  if (res){
    const list = items_id.map((v) => (<Table key={v} id={v} name={res.data[v]["name"]} gPrice={res.data[v]["price"]} cPrice={res.info[v]["cprice"]} quantity={res.info[v]["quantity"]} crystal={res.data["crystal"]} bundle={res.info[v]["bundle"]} />))
    return(
      <div>
        <Header />
        {list}
      </div>
    )
  }

  return "Loading Screen...."
}

export default App;
