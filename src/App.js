import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "./components"

const App = () => {
  const [stateTweets,setTweets] = useState([]);

  useEffect (() => {
    const GetAllTweets = async () => {
      const response = await axios.get("localhost:44359/api/tweets")
      setTweets(response.data)
      console.log(response)
    }
    GetAllTweets();
    console.log(stateTweets)
  });
  return (
    <div className="App">
      <header className="App-header">  

      {stateTweets.map((item, index) => (
                <Card
                  index={index}
                  value={item.name}
                  cost={item.cost}
                  id={item.id}
                  
                />
              ))}



      </header>
    </div>
  );
}

export default App;
