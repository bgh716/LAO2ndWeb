import './App.css';
import axios from "axios"
import React, { useState, useEffect } from 'react';

function App() {
  const columns = ["item", "gold price", "crystal price", "rate(shows how much crystal is more expensive)"];
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

  console.log(res)

  return "Hello World!";
}

export default App;
