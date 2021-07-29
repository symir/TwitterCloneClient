import React from "react";
import { Card, Row, Col, Button, ButtonGroup } from "react-bootstrap";

const Tweet = (props) => {
  return (
    <Card bg="light" border="dark" text="dark" style={{ width: "24rem" }}>
      {props.item.retweetId ? ( // Tweets that are retweets
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
      ) : props.item.replyId ? ( // Tweets that are replies
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
        // Regular ol' tweets
        <Card.Body>
          <Card.Title>{props.item.user.userName}</Card.Title>
          <Card.Text>{props.item.content}</Card.Text>
          <ButtonGroup>
            <Button
              variant="outline-primary"
              onClick={() => props.onLike(props.id)}
            >
              Likes: {props.item.likeCounter}
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => props.onRetweet(props.id)}
            >
              Retweets: {props.item.retweetCounter}
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => props.onShowReply(props.id)}
            >
              Replies: {props.item.replyCounter}
            </Button>
          </ButtonGroup>
        </Card.Body>
      )}
    </Card>
  );
};

export default Tweet;
