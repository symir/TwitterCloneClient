//import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Tweet} from "./components"

import Container from "react-bootstrap/Card";
import Col from "react-bootstrap/Card";
import Row from "react-bootstrap/Card";

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
      <Container>
        <Row>
          <Col md="auto">
            {stateTweets && stateTweets.map((item, index) => (
              <Tweet 
                index={index}
                item={item}
              />
            ))}
          </Col>
        </Row>
      </Container>
      </header>
    </div>
  );
}

export default App;
