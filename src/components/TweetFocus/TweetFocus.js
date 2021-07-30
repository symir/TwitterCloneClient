import React, { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  ButtonGroup,
  Image,
  Modal,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AvatarFemale from "./../../img/avatar-female.png";
import AvatarMale from "./../../img/avatar-male.png";
import AvatarNeutral from "./../../img/avatar-default.png";

/* <TweetFocus 
          show={stateShowFocus}
          handleClose={handleCloseFocus}
          onLike={handleLike}
          onRetweet={handleShowRetweet}
          onShowReply={handleShowReply}
          id={stateFocusTweet.tweetId}
          item={stateFocusTweet}
          reference={stateFocusReferencedTweet}
        />
*/

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

const TweetFocus = (props) => {
  return (
    <Modal size="lg" show={props.show} onHide={props.handleClose}>
      <Container>
        <Row>
          <Card
            bg="light"
            border="dark"
            text="dark"
            style={{ width: "24rem", marginTop: "1rem" }}
          >
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
          </Card>
        </Row>
        {props.reference &&
          props.reference.map((referenceItem) => (
            <Row key={referenceItem.tweetId}>
              <Card
                bg="light"
                border="dark"
                text="dark"
                style={{ width: "20rem" }}
              >
                <User user={referenceItem.user} />
                <Card.Body>
                  <Card.Text>{referenceItem.content}</Card.Text>
                  <ButtonGroup>
                    <Button
                      variant="outline-primary"
                      onClick={() => props.onLike(referenceItem.tweetId)}
                    >
                      Likes: {referenceItem.likeCounter}
                    </Button>
                    <Button
                      variant="outline-primary"
                      onClick={() => props.onRetweet(referenceItem.tweetId)}
                    >
                      Retweets: {referenceItem.retweetCounter}
                    </Button>
                    <Button
                      variant="outline-primary"
                      onClick={() => props.onShowReply(referenceItem.tweetId)}
                    >
                      Replies: {referenceItem.replyCounter}
                    </Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Row>
          ))}
      </Container>
    </Modal>
  );
};

export default TweetFocus;
