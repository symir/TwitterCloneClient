import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Card} from "./components"
import Card from "react-bootstrap/Card";

const App = () => {
  const [stateTweets,setTweets] = useState([]);

  useEffect (() => {
    const GetAllTweets = async () =>
    {
      const response = await axios.get("https://localhost:44359/api/tweets")
      console.log("SetTweets")
      setTweets(response.data)
    }
    GetAllTweets();
    console.log("GETTWEETS")
    console.log(stateTweets)
  });

  
  return (
    <div className="App">
      <header className="App-header">  

      {stateTweets && stateTweets.map((item, index) => (
                <Card 
                  bg="light"
                  border="dark"
                  text="dark"
                  key={index}
                  style={{ width: '18rem' }}
                >
                  <Card.Body>
                    <Card.Text>{item.content}</Card.Text>
                  </Card.Body>
                  
                </Card>
              ))}
      </header>
    </div>
  );
}

export default App;
