import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function AppNavbar() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when drawer is open
    } else {
      document.body.style.overflow = ''; // Restore scrolling
    }
    return () => {
      document.body.style.overflow = ''; // Cleanup on unmount
    };
  }, [expanded]);

  const closeDrawer = () => {
    setExpanded(false);
  };

  const handleNavLinkClick = (id) => {
    closeDrawer(); // Close the drawer on link click
    // Scroll smoothly to section
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* This is the overlay that captures outside clicks */}
      {expanded && (
        <div className="offcanvas-overlay" onClick={closeDrawer}></div>
      )}

      <Navbar bg="white" variant="light" expand="lg" fixed="top" expanded={expanded} onToggle={() => setExpanded(!expanded)} className="app-navbar">
        <Container>
          <Navbar.Brand onClick={() => handleNavLinkClick('home')} className="navbar-brand-logo">
            <span className="logo-text">VY</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="mobile-drawer">
            {/* Close button for mobile drawer, only shown when expanded */}
            {expanded && (
              <button className="drawer-close-btn" onClick={closeDrawer} aria-label="Close menu">
                {/* Professional SVG 'X' icon */}
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
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
    </>
  );
}

export default AppNavbar;