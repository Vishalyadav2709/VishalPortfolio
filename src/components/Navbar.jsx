import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // For potential custom navbar styling

function AppNavbar() {
  const [expanded, setExpanded] = useState(false);

  // Function to close the navbar on link click (for mobile)
  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Container>
        <Navbar.Brand href="#home" onClick={handleNavLinkClick}>Vishal Yadav</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* ms-auto pushes nav items to the right */}
            <Nav.Link href="#home" onClick={handleNavLinkClick}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={handleNavLinkClick}>About</Nav.Link>
            <Nav.Link href="#skills" onClick={handleNavLinkClick}>Skills</Nav.Link>
            <Nav.Link href="#experience" onClick={handleNavLinkClick}>Experience</Nav.Link>
            <Nav.Link href="#projects" onClick={handleNavLinkClick}>Projects</Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavLinkClick}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;