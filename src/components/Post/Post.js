import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Post = (props) => {
  return (
    <Container>
      <Form
        onSubmit={(e) => props.onSubmit(e)}
        onChange={(e) => props.onChange(e)}
      >
        <Form.Group controlId="exampleForm.ControlTextareaPost1">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="What's on your mind?"
            resize="none"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Post;
