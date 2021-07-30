import React from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";

const Post = (props) => {
  return (
    <Container fluid>
      <Form
        onSubmit={(e) => props.onSubmit(e)}
        onChange={(e) => props.onChange(e)}
        style={{ marginTop: "1rem" }}
      >
        <Row>
          <Form.Group controlId="exampleForm.ControlTextareaPost1">
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="What's on your mind?"
              style={{ resize: "none", width: "24rem" }}
              maxLength="280"
            />
          </Form.Group>
        </Row>
        <Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default Post;
