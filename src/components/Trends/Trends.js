import React from "react";
import { Container, Card } from "react-bootstrap";

const Trends = (props) => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Subtitle>Trending in $yourLocation</Card.Subtitle>
          <Card.Title>Trend #1</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Subtitle>Trending in $yourLocation</Card.Subtitle>
          <Card.Title>Trend #2</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Trends;
