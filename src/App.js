//import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Card} from "./components"
import Card from "react-bootstrap/Card";
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
              <Card 
                bg="light"
                border="dark"
                text="dark"
                key={index}
                style={{ width: '18rem' }}
              >
                
                <Card.Body>
                    {item.retweetId ?
                    <React.Fragment>
                      <Card.Title>{item.user.userName} retweeted</Card.Title>
                      <Card.Body> 
                        <Card.Title>{item.referenceTweet.user.userName}</Card.Title>
                        <Card.Text>{item.referenceTweet.content}</Card.Text>
                        <Card.Text>Retweet!</Card.Text>
                      </Card.Body>
                      </React.Fragment>
                    : (item.replyId ?
                      <Card.Body>
                        <Card.Title>{item.user.userName}</Card.Title>
                        <Card.Text>{item.content}</Card.Text>
                          <Card.Body>
                            <Card.Title>{item.referenceTweet.user.userName}</Card.Title>
                            <Card.Text>{item.referenceTweet.content}</Card.Text>
                          </Card.Body>
                      </Card.Body>
                      :
                      <Card.Body>
                        <Card.Title>{item.user.userName}</Card.Title>
                        <Card.Text>{item.content}</Card.Text>
                      </Card.Body>
                      )
                    }
                </Card.Body>
                
                
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
      </header>
    </div>
  );
}

export default App;
