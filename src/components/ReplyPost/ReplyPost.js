import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
  Modal,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ReplyPost = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reply</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Card
              bg="light"
              border="dark"
              text="dark"
              style={{ width: "24rem" }}
            >
              <Card.Body>
                <Card.Title>{props.itemUser}</Card.Title>
                <Card.Text>{props.itemContent}</Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Container>
          <Row>
            <Form
              onSubmit={(e) => props.onSubmit(e)}
              onChange={(e) => props.onChange(e)}
            >
              <Form.Group controlId="exampleForm.ControlTextareaReplyPost1">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="What's on your mind?"
                  maxlength="280"
                  style={{
                    resize: "none",
                    width: "24rem",
                  }}
                />
              </Form.Group>
              <ButtonGroup className="float-right">
                <Button variant="secondary" onClick={props.handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Reply
                </Button>
              </ButtonGroup>
            </Form>
          </Row>
        </Container>
      </Modal.Footer>
    </Modal>
  );
};

export default ReplyPost;
