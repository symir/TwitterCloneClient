//import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tweet, Menu } from "./components";

import { Container, Col, Row } from "react-bootstrap";

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
      <Container fluid>
        <Row>
          <Col>
            <Menu />
          </Col>
          <Col>
            {stateTweets && stateTweets.map((item, index) => (
              <Row>
                <Tweet 
                  index={index}
                  item={item}
                />
              </Row>
            ))}
          </Col>
          <Col>
          Whoo!</Col>
        </Row>
      </Container>
      </header>
    </div>
  );
}

export default App;
