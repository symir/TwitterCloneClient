import React from "react";
import { Button, ButtonGroup, Container, Nav } from "react-bootstrap";

const Menu = (props) => {
  return (
    <Container>
      <ButtonGroup vertical style={{ marginTop: "1rem" }}>
        <Button variant="outline-primary">Home</Button>
        <Button variant="outline-primary">Explore</Button>
        <Button variant="outline-primary">Notifications</Button>
        <Button variant="outline-primary">Messages</Button>
        <Button variant="outline-primary">Bookmarks</Button>
        <Button variant="outline-primary">Lists</Button>
        <Button variant="outline-primary">Profile</Button>
        <Button variant="outline-primary">More</Button>
      </ButtonGroup>
    </Container>
  );
};

export default Menu;
