import React from "react";
import { Card, Button, ButtonGroup, Image } from "react-bootstrap";
import AvatarFemale from "./../../img/avatar-female.png";
import AvatarMale from "./../../img/avatar-male.png";
import AvatarNeutral from "./../../img/avatar-default.png";
import { useHistory } from "react-router-dom";

const User = (props) => {
  return (
    <Card.Header>
      {props.user.avatar === 1 && (
        <Image src={AvatarFemale} style={{ float: "left" }} />
      )}
      {props.user.avatar === 2 && (
        <Image src={AvatarMale} style={{ float: "left" }} />
      )}
      {props.user.avatar === 3 && (
        <Image src={AvatarNeutral} style={{ float: "left" }} />
      )}
      <Card.Subtitle
        className="d-flex justify-content-center"
        style={{ marginTop: "1rem" }}
      >
        {props.user.alias} (@{props.user.userName}){" "}
        {props.retweet && <> retweeted</>}
        {props.reply && <> replied</>}
      </Card.Subtitle>
    </Card.Header>
  );
};

const Tweet = (props) => {
  const history = useHistory();

  return (
    <Card
      bg="light"
      border="dark"
      text="dark"
      style={{ width: "24rem" }}
      onClick={() => history.push("/" + props.id)}
    >
      {props.item.retweetId && props.noChild === false ? ( // Tweets that are retweets
        <>
          <User user={props.item.user} retweet />
          <Card.Body>
            <Card
              bg="light"
              border="dark"
              text="dark"
              onClick={(e) => {
                e.stopPropagation();
                history.push("/" + props.item.retweetId);
              }}
            >
              <User user={props.item.referenceTweet.user} />
              <Card.Body>
                <Card.Text>{props.item.referenceTweet.content}</Card.Text>
                <ButtonGroup>
                  <Button
                    variant="outline-primary"
                    onClick={(event) =>
                      props.onLike(props.item.retweetId, event)
                    }
                  >
                    Likes: {props.item.referenceTweet.likeCounter}
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={(event) =>
                      props.onRetweet(props.item.retweetId, event)
                    }
                  >
                    Retweets: {props.item.referenceTweet.retweetCounter}
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={(event) =>
                      props.onShowReply(props.item.retweetId, event)
                    }
                  >
                    Replies: {props.item.referenceTweet.replyCounter}
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Card.Body>
        </>
      ) : props.item.replyId && props.noChild === false ? ( // Tweets that are replies
        <>
          <User user={props.item.user} reply />
          <Card.Body>
            <Card.Text>{props.item.content}</Card.Text>
            <ButtonGroup>
              <Button
                variant="outline-primary"
                onClick={(event) => props.onLike(props.id, event)}
              >
                Likes: {props.item.likeCounter}
              </Button>
              <Button
                variant="outline-primary"
                onClick={(event) => props.onRetweet(props.id, event)}
              >
                Retweets: {props.item.retweetCounter}
              </Button>
              <Button
                variant="outline-primary"
                onClick={(event) => props.onShowReply(props.id, event)}
              >
                Replies: {props.item.replyCounter}
              </Button>
            </ButtonGroup>
            <Card
              bg="light"
              border="dark"
              text="dark"
              style={{ marginTop: "1rem" }}
              onClick={(e) => {
                e.stopPropagation();
                history.push("/" + props.item.replyId);
              }}
            >
              <User user={props.item.referenceTweet.user} />
              <Card.Body>
                <Card.Text>{props.item.referenceTweet.content}</Card.Text>
                <ButtonGroup>
                  <Button
                    variant="outline-primary"
                    onClick={(event) => props.onLike(props.item.replyId, event)}
                  >
                    Likes: {props.item.referenceTweet.likeCounter}
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={(event) =>
                      props.onRetweet(props.item.replyId, event)
                    }
                  >
                    Retweets: {props.item.referenceTweet.retweetCounter}
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={(event) =>
                      props.onShowReply(props.item.replyId, event)
                    }
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
                onClick={(event) => props.onLike(props.id, event)}
              >
                Likes: {props.item.likeCounter}
              </Button>
              <Button
                variant="outline-primary"
                onClick={(event) => props.onRetweet(props.id, event)}
              >
                Retweets: {props.item.retweetCounter}
              </Button>
              <Button
                variant="outline-primary"
                onClick={(event) => props.onShowReply(props.id, event)}
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
