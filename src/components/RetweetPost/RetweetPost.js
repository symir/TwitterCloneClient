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

const RetweetPost = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Retweet this tweet?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ButtonGroup className="float-right">
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={props.onSubmit}>
            Confirm
          </Button>
        </ButtonGroup>
      </Modal.Body>
    </Modal>
  );
};

export default RetweetPost;
