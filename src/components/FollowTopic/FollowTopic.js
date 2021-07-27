import React from "react";
import { Container, Form } from "react-bootstrap";

const FollowTopic = (props) => {
  return (
    <Container>
      <Form.Control as="input" type="search" placeholder="search" />
    </Container>
  );
};

export default FollowTopic;
