import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="fw-bold">Animal Shelter</Navbar.Brand>
          </LinkContainer>
          <Nav className="ms-auto fw-bold">
            <LinkContainer to="/adopt">
              <Nav.Link>Adopt Animal</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/drop">
              <Nav.Link>Drop Animal</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/donate">
              <Nav.Link>Donate</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/report">
              <Nav.Link>Report</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/find">
              <Nav.Link>Find Animal</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
