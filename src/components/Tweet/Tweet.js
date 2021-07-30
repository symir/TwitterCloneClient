import React from "react";
import { Card, Row, Col, Button, ButtonGroup, Image } from "react-bootstrap";
import AvatarFemale from "./../../img/avatar-female.png";
import AvatarMale from "./../../img/avatar-male.png";
import AvatarNeutral from "./../../img/avatar-default.png";

const User = (props) => {
  return (
    <Card.Header>
      <Row>
        <Col md="auto">
          {props.user.avatar === 1 && <Image src={AvatarFemale} fluid />}
          {props.user.avatar === 2 && <Image src={AvatarMale} fluid />}
          {props.user.avatar === 3 && <Image src={AvatarNeutral} fluid />}
        </Col>
        <Col md="6" className="d-flex align-items-center">
          <Card.Subtitle>
            {props.user.alias} (@{props.user.userName}){" "}
            {props.retweet && <> retweeted</>}
          </Card.Subtitle>
        </Col>
      </Row>
    </Card.Header>
  );
};

const Tweet = (props) => {
  return (
    <Card
      bg="light"
      border="dark"
      text="dark"
      style={{ width: "24rem", marginTop: "1rem" }}
      onClick={() => props.onCardClick(props.id)}
    >
      {props.item.retweetId ? ( // Tweets that are retweets
        <>
          <User user={props.item.user} retweet />
          <Card.Body>
            <Card
              bg="light"
              border="dark"
              text="dark"
              style={{ marginTop: "1rem" }}
              onClick={(event) =>
                props.onCardChildClick(props.item.retweetId, event)
              }
            >
              <User user={props.item.referenceTweet.user} />
              <Card.Body>
                <Card.Text>{props.item.referenceTweet.content}</Card.Text>
                <ButtonGroup>
                  <Button
                    variant="outline-primary"
                    onClick={() => props.onLike(props.item.retweetId)}
                  >
                    Likes: {props.item.referenceTweet.likeCounter}
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => props.onRetweet(props.item.retweetId)}
                  >
                    Retweets: {props.item.referenceTweet.retweetCounter}
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => props.onShowReply(props.item.retweetId)}
                  >
                    Replies: {props.item.referenceTweet.replyCounter}
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Card.Body>
        </>
      ) : props.item.replyId ? ( // Tweets that are replies
        <>
          <User user={props.item.user} />
          <Card.Body>
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
            <Card
              bg="light"
              border="dark"
              text="dark"
              style={{ marginTop: "1rem" }}
              onClick={(event) =>
                props.onCardChildClick(props.item.replyId, event)
              }
            >
              <User user={props.item.referenceTweet.user} />
              <Card.Body>
                <Card.Text>{props.item.referenceTweet.content}</Card.Text>
                <ButtonGroup>
                  <Button
                    variant="outline-primary"
                    onClick={() => props.onLike(props.item.replyId)}
                  >
                    Likes: {props.item.referenceTweet.likeCounter}
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => props.onRetweet(props.item.replyId)}
                  >
                    Retweets: {props.item.referenceTweet.retweetCounter}
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => props.onShowReply(props.item.replyId)}
                  >
                    Replies: {props.item.referenceTweet.replyCounter}
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Card.Body>
        </>
      ) : (
        // Regular ol' tweets
        <>
          <User user={props.item.user} />
          <Card.Body>
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
        </>
      )}
    </Card>
  );
};

export default Tweet;
