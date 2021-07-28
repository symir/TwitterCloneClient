import React from "react";
import { Container, Card } from "react-bootstrap";

const User = (props) => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>{props.UserName}</Card.Title>
          <Card.Subtitle>{props.Alias}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default User;
