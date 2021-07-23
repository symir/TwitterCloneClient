import React from "react";
import Card from "react-bootstrap/Card";

const Tweet = (props) => {
  return (
    <Card
      bg="light"
      border="dark"
      text="dark"
      key={props.index}
      style={{ width: "18rem" }}
    >
      {props.item.retweetId ? (
        <Card.Body>
          <Card.Title>{props.item.user.userName} retweeted</Card.Title>
          <Card.Body>
            <Card.Title>{props.item.referenceTweet.user.userName}</Card.Title>
            <Card.Text>{props.item.referenceTweet.content}</Card.Text>
            <Card.Text>
              Likes: {props.item.referenceTweet.likeCounter}
            </Card.Text>
            <Card.Text>
              Retweets: {props.item.referenceTweet.retweetCounter}
            </Card.Text>
            <Card.Text>
              Replies: {props.item.referenceTweet.replyCounter}
            </Card.Text>
          </Card.Body>
        </Card.Body>
      ) : props.item.replyId ? (
        <Card.Body>
          <Card.Title>{props.item.user.userName}</Card.Title>
          <Card.Text>{props.item.content}</Card.Text>
          <Card.Text>Likes: {props.item.likeCounter}</Card.Text>
          <Card.Text>Retweets: {props.item.retweetCounter}</Card.Text>
          <Card.Text>Replies: {props.item.replyCounter}</Card.Text>
          <Card.Body>
            <Card.Title>{props.item.referenceTweet.user.userName}</Card.Title>
            <Card.Text>{props.item.referenceTweet.content}</Card.Text>
            <Card.Text>
              Likes: {props.item.referenceTweet.likeCounter}
            </Card.Text>
            <Card.Text>
              Retweets: {props.item.referenceTweet.retweetCounter}
            </Card.Text>
            <Card.Text>
              Replies: {props.item.referenceTweet.replyCounter}
            </Card.Text>
          </Card.Body>
        </Card.Body>
      ) : (
        <Card.Body>
          <Card.Title>{props.item.user.userName}</Card.Title>
          <Card.Text>{props.item.content}</Card.Text>
          <Card.Text>Likes: {props.item.likeCounter}</Card.Text>
          <Card.Text>Retweets: {props.item.retweetCounter}</Card.Text>
          <Card.Text>Replies: {props.item.replyCounter}</Card.Text>
        </Card.Body>
      )}
    </Card>
  );
};

export default Tweet;