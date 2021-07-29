//import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tweet, Menu, Search, Trends, Post, ReplyPost, RetweetPost } from "./components";

import { Container, Col, Row} from "react-bootstrap";

const App = () => {
  const [stateTweets,setTweets] = useState([]);
  const [statePost,setPost] = useState();

  const [stateReply,setReply] = useState();
  const [stateReferenceId,setReferenceId] = useState();
  const [stateShowReply,setShowReply] = useState(false);
  const [stateShowRetweet,setShowRetweet] = useState(false);
  const [stateReferencedTweet, setReferencedTweet] = useState({"content":"","user":{"username":""}});

  const [stateUser,setUser] = useState(1);

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

  const handlePostSubmit = async event =>
  {
    event.preventDefault();

    const postObject = {
      "UserId" : stateUser,
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

  const handlePostChange = event => 
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


  const handleCloseReply = () => {
    setShowReply(false);
    setReferenceId("");
  }
  const handleShowReply = (id) => {
    setReferenceId(id);
    setShowReply(true);
    console.log("replyId: "+id);
    setReferencedTweet(stateTweets.find(tweet => tweet.tweetId === id))

  }

  const handleCloseRetweet = () => 
  {
    setShowRetweet(false)
    setReferenceId("")
  }
  const handleShowRetweet = async (id) =>
  {
    setReferenceId(id);
    setShowRetweet(true);
  }

  const handleReplySubmit = async event =>
  {
    event.preventDefault();

    const replyObject = {
      "UserId" : stateUser,
      "Content" : stateReply,
      "ReplyId" : stateReferenceId
    }

    const ReplyTweet = async () => 
    {
      await axios.post("https://localhost:44359/api/tweets/post", replyObject, { headers: {
        Accept: 'application/json',
       'Content-Type': 'application/json'
      }})
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
    console.log(replyObject)
    ReplyTweet();
    setReply("")
    handleCloseReply()
  }

  const handleReplyChange = async event => 
  {
    setReply(event.target.value);
  }

  const handleRetweetSubmit = async event => 
  {
    const retweetObject = {
      "UserId" : stateUser,
      "RetweetId" : stateReferenceId
    }

    const Retweet = async () => 
    {
      await axios.post("https://localhost:44359/api/tweets/post", retweetObject, { headers: {
        Accept: 'application/json',
       'Content-Type': 'application/json'
      }})
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
    Retweet();
    handleCloseRetweet();
  }
  
  return (
    <div className="App">
      <header className="App-header">  
      <ReplyPost 
        show={stateShowReply} 
        handleClose={handleCloseReply} 
        onSubmit={handleReplySubmit}
        onChange={handleReplyChange} 
        id={stateReferenceId}
        itemContent={stateReferencedTweet.content}
        itemUser={stateReferencedTweet.user.userName}
      />
      <RetweetPost 
        show={stateShowRetweet}
        handleClose={handleCloseRetweet}
        onSubmit={handleRetweetSubmit}
        id={stateReferenceId}
        />
      <Container>
        <Row>
          <Col md="auto">
            <Menu />
          </Col>
          <Col md="auto">
            <Post 
              onChange={handlePostChange}
              onSubmit={handlePostSubmit}
            />
            {stateTweets && stateTweets.map((item) => (
              <Row key={item.tweetId}>
                <Tweet 
                  onLike={handleLike}
                  onRetweet={handleShowRetweet}
                  onShowReply={handleShowReply}
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
