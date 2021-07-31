import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Menu = (props) => {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto flex-column">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Item>
            <Nav.Link>Explore</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Notifications</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Messages</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Bookmarks</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Lists</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>More</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
