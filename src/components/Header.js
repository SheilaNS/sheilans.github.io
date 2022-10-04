import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/header.css';

function Header() {
  return (
    <header className="header">
      <Navbar expand="lg" bg="light" variant="light" className="nav-menu">
      <Container className="header-container">
        <Navbar.Brand>Full Stack Software Developer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="header-links">
          <Nav className="ms-auto">
            <Stack direction="horizontal" gap={3}>
              <Nav.Link href="/#/" className="active">Home</Nav.Link>
              <Nav.Link href="/#/about">About</Nav.Link>
              <Nav.Link href="/#/skills">Skills</Nav.Link>
              <Nav.Link href="/#/projects">Projects</Nav.Link>
              <Nav.Link href="/#/contact">Contact</Nav.Link>
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default Header;