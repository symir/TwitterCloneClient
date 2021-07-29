import React from "react";
import { Container, Card, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ReplyPost = (props) => {
  return (
    <Container>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reply</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card bg="light" border="dark" text="dark" style={{ width: "24rem" }}>
            <Card.Body>
              <Card.Title>{props.itemUser}</Card.Title>
              <Card.Text>{props.itemContent}</Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Form
            onSubmit={(e) => props.onSubmit(e)}
            onChange={(e) => props.onChange(e)}
          >
            <Form.Group controlId="exampleForm.ControlTextareaReplyPost1">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="What's on your mind?"
                resize="none"
              />
            </Form.Group>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Reply
            </Button>
          </Form>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ReplyPost;
