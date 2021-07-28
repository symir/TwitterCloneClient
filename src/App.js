//import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tweet, Menu, Search, Trends, Post } from "./components";

import { Container, Col, Row } from "react-bootstrap";

const App = () => {
  const [stateTweets,setTweets] = useState([]);
  const [statePost,setPost] = useState();

  useEffect (() => {
    const GetAllTweets = async () =>
    {
      const response = await axios.get("https://localhost:44359/api/tweets")
      console.log("SetTweets")
      setTweets(response.data)
    } 
    GetAllTweets();
    // console.log("GETTWEETS")
    // console.log(stateTweets)
  });

  const handleSubmit = async event =>
  {
    event.preventDefault();
    const User = "1";
    const postObject = {
      userId : User,
      content : statePost
    }

    const PostTweet = async () => 
    {
      await axios.post("https://localhost:44359/api/tweets/", {postObject})
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
    PostTweet();
  }

  const handleChange = event => 
  {
    setPost(event.target.value);
  }

  
  return (
    <div className="App">
      <header className="App-header">  
      <Container fluid>
        <Row>
          <Col>
            <Menu />
          </Col>
          <Col>
            <Post 
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            {stateTweets && stateTweets.map((item) => (
              <Row key={item.tweetId}>
                <Tweet 
                  item={item}
                />
              </Row>
            ))}
          </Col>
          <Col>
            <Search />
            <Trends />
          </Col>
        </Row>
      </Container>
      </header>
    </div>
  );
}

export default App;
