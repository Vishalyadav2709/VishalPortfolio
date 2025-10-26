import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = (id) => {
    setExpanded(false);

    // Scroll smoothly to section
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Container>
        <Navbar.Brand onClick={() => handleNavLinkClick('home')}>Vishal Yadav</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleNavLinkClick('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavLinkClick('about')}>About</Nav.Link>
            <Nav.Link onClick={() => handleNavLinkClick('skills')}>Skills</Nav.Link>
            <Nav.Link onClick={() => handleNavLinkClick('experience')}>Experience</Nav.Link>
            <Nav.Link onClick={() => handleNavLinkClick('projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => handleNavLinkClick('contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
