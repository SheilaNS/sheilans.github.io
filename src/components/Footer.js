import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/footer.css';

function Footer() {
  return (
    <header className="footer">
      <Navbar expand="lg" bg="light" variant="light" fixed="bottom">
      <Container className="footer-container">
        <p className="footer-text">Copyright © 2022 Sheila Nakashima dos Santos</p>
      </Container>
    </Navbar>
    </header>
  );
}

export default Footer;