import React from "react";
import { Container, Form } from "react-bootstrap";

const Search = (props) => {
  return (
    <Container>
      <Form.Control
        as="input"
        type="search"
        placeholder="search"
        style={{ marginTop: "1rem" }}
      />
    </Container>
  );
};

export default Search;
