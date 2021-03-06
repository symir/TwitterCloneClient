//import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Tweet, 
  Menu, 
  Search, 
  Trends, 
  Post, 
  ReplyPost, 
  RetweetPost
} from "./components";

import { Container, Col, Row, Card} from "react-bootstrap";

import {
  Route,
  BrowserRouter
} from "react-router-dom";

const App = () => {
  const [stateTweets,setTweets] = useState([]);
  const [statePost,setPost] = useState();

  const [stateReply,setReply] = useState();
  const [stateReferenceId,setReferenceId] = useState();
  const [stateShowReply,setShowReply] = useState(false);
  const [stateShowRetweet,setShowRetweet] = useState(false);
  const [stateReferencedTweet, setReferencedTweet] = useState({
    "content":"",
    "user":{
      "username":"",
      "alias":"",
      "avatar":""}
  });

  const [stateUsers,setUsers] = useState([]);
  const [stateActiveUser,setActiveUser] = useState(1);


  useEffect (() => {
    const GetAllTweets = async () =>
    {
      const response = await axios.get("https://localhost:44359/api/tweets")
      setTweets(response.data)
    } 
    GetAllTweets();
  });


  const handlePostSubmit = async event =>
  {
    event.preventDefault();

    const postObject = {
      "UserId" : stateActiveUser,
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

  const handleLike = async (id, event) => 
  {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
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
  const handleShowReply = (id, event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
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
  const handleShowRetweet = (id, event) =>
  {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    setReferenceId(id);
    setShowRetweet(true);
  }

  const handleReplySubmit = (event) =>
  {
    event.preventDefault();
    event.stopPropagation();

    const replyObject = {
      "UserId" : stateActiveUser,
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
      "UserId" : stateActiveUser,
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
    <BrowserRouter>
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
          <Container fluid>
            <Row>
              <Col lg="auto">
                <Menu />
              </Col>
              <Col md="auto">
                <Row>
                  <Col>
                    <Post 
                      onChange={handlePostChange}
                      onSubmit={handlePostSubmit}
                      users={stateUsers}
                      activeUser={stateActiveUser}
                    />
                  </Col>
                </Row>
                    <Route path="/" exact render={() => 
                      <>
                        {stateTweets && stateTweets.map((item) => (
                          <Row key={item.tweetId} style={{ marginTop: "1rem"}} >
                            <Col>
                              <Tweet 
                                noChild={false}
                                onLike={handleLike}
                                onRetweet={handleShowRetweet}
                                onShowReply={handleShowReply}
                                id={item.tweetId}
                                item={item}
                              />
                            </Col>
                          </Row>
                        ))}</>
                      }/>
                      <Route path={"/:tweetIdRoute"} render={(routeProps) => 
                      <>
                      <Card style={{ marginTop: "2rem", marginLeft:"1rem", width:"24rem" }}>
                          {stateTweets.length > 0 && 
                          <Card.Title><Row 
                          key={parseInt(routeProps.match.params.tweetIdRoute)}
                          >
                            <Col style={{ marginTop: "-1rem", marginLeft: "-1rem" }}>
                              <Tweet 
                                noChild={false}
                                onLike={handleLike}
                                onRetweet={handleShowRetweet}
                                onShowReply={handleShowReply}
                                id={parseInt(routeProps.match.params.tweetIdRoute)}
                                item={stateTweets.find(tweet => tweet.tweetId === parseInt(routeProps.match.params.tweetIdRoute))}
                              />
                            </Col>
                          </Row>
                          </Card.Title>}
                          <Card.Body>
                          <Container>
                            {stateTweets.length > 0 && (
                              !stateTweets.find(tweet => tweet.tweetId === parseInt(routeProps.match.params.tweetIdRoute)).replyId && 
                              !stateTweets.find(tweet => tweet.tweetId === parseInt(routeProps.match.params.tweetIdRoute)).retweetId
                              ) ?
                            <Card.Subtitle style={{ marginBottom: "1rem" }}>
                              Replying to @{stateTweets.find(tweet => tweet.tweetId === parseInt(routeProps.match.params.tweetIdRoute)).user.userName}: 
                            </Card.Subtitle>
                            :<></>}
                            {stateTweets.length > 0 && stateTweets.filter(i=> i.replyId === parseInt(routeProps.match.params.tweetIdRoute)).map((item)=>(
                              <Row key={item.tweetId} style={{ marginLeft: "-3rem",marginTop: "1rem" }}>
                                <Col>
                                  <Tweet 
                                    noChild={true}
                                    refUser={stateTweets.find(tweet => tweet.tweetId === parseInt(routeProps.match.params.tweetIdRoute)).user}
                                    onLike={handleLike}
                                    onRetweet={handleShowRetweet}
                                    onShowReply={handleShowReply}
                                    id={item.tweetId}
                                    item={item}
                                  />
                                </Col>
                              </Row>
                          ))}
                          </Container>
                          </Card.Body>
                          </Card>
                          </>
                      }/>
                </Col>
              <Col lg="auto">
                <Search />
                <Trends />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
