import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// Import an icon library or use a simple text 'X'
// For a professional look, a proper icon font like Font Awesome or Bootstrap Icons is recommended.
// If you don't have it installed, you can add it via npm or a CDN:
// npm install react-icons (for react-icons)
// or just use a simple 'X' character
// import { FaTimes } from 'react-icons/fa'; // Example if using react-icons/fa

import 'bootstrap/dist/css/bootstrap.min.css';


function AppNavbar() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [expanded]);

  const handleNavLinkClick = (id) => {
    setExpanded(false); // Close the drawer on link click

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const closeDrawer = () => {
    setExpanded(false);
  };

  return (
    <Navbar bg="white" variant="light" expand="lg" fixed="top" expanded={expanded} onToggle={() => setExpanded(!expanded)} className="app-navbar">
      <Container>
        <Navbar.Brand onClick={() => handleNavLinkClick('home')} className="navbar-brand-logo">
          <span className="logo-text">VY</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="mobile-drawer"> {/* Add a class for specific styling */}
          {/* Close button for mobile drawer, only shown when expanded */}
          {expanded && ( // Only render the button when the drawer is open
            <button className="drawer-close-btn" onClick={closeDrawer} aria-label="Close menu">
              {/* <FaTimes /> If using react-icons */}
              X {/* Simple 'X' if no icon library */}
            </button>
          )}

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