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
      //console.log("SetTweets")
      setTweets(response.data)
    } 
    GetAllTweets();
    // console.log("GETTWEETS")
    // console.log(stateTweets)
  });

  const handleSubmit = async event =>
  {
    event.preventDefault();

    const User = 1;
    const postObject = {
      "UserId" : User,
      "Content" : statePost,
    }

    const PostTweet = async () => 
    {
      await axios.post("https://localhost:44359/api/tweets/post", postObject, { headers: {
        Accept: 'application/json',
       'Content-Type': 'application/json'
      }})
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
    console.log(postObject)
    PostTweet();
    setPost("")
  }

  const handleChange = event => 
  {
    setPost(event.target.value);
  }

  const handleLike = async (id) => 
  {
    const LikeString = "https://localhost:44359/api/tweets/like/"+id;
    const LikeTweet = async () =>
    {
      await axios.put(LikeString)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
    console.log(LikeString);
    LikeTweet();
  }
  
  return (
    <div className="App">
      <header className="App-header">  
      <Container>
        <Row>
          <Col md="auto">
            <Menu />
          </Col>
          <Col md="auto">
            <Post 
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            {stateTweets && stateTweets.map((item) => (
              <Row key={item.tweetId}>
                <Tweet 
                  onLike={handleLike}
                  id={item.tweetId}
                  item={item}
                />
              </Row>
            ))}
          </Col>
          <Col md="auto">
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
