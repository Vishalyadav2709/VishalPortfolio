import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppNavbar() {
  const [expanded, setExpanded] = useState(false);
  const drawerRef = useRef(null); // Ref to the drawer element for click outside and drag logic

  // --- Click Outside to Close ---
  const handleClickOutside = useCallback((event) => {
    if (
      expanded &&
      drawerRef.current &&
      !drawerRef.current.contains(event.target) &&
      !event.target.closest('.navbar-toggler')
    ) {
      setExpanded(false);
    }
  }, [expanded]);

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [expanded, handleClickOutside]);


  // --- Drag to Close (Mobile Only) ---
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslateX, setCurrentTranslateX] = useState(0);

  const handleTouchStart = (e) => {
    if (e.touches.length === 1 && expanded) {
      setIsDragging(true);
      setStartX(e.touches[0].clientX);
      if (drawerRef.current) {
        drawerRef.current.style.transition = 'none';
      }
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    let deltaX = currentX - startX;
    if (deltaX < 0) deltaX = 0;
    setCurrentTranslateX(deltaX);
    if (drawerRef.current) {
      drawerRef.current.style.transform = `translateX(${deltaX}px)`;
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (drawerRef.current) {
      drawerRef.current.style.transition = 'right 0.3s ease-in-out, transform 0.3s ease-in-out';
      const drawerWidth = drawerRef.current.offsetWidth;
      if (currentTranslateX > drawerWidth * 0.3) {
        setExpanded(false);
        // The transform will be reset by the useEffect below
      } else {
        drawerRef.current.style.transform = `translateX(0px)`;
      }
    }
    setCurrentTranslateX(0);
  };

  // =========================================================
  // THE FIX: Add this useEffect to clean up inline styles
  // =========================================================
  useEffect(() => {
    // If the drawer is NOT expanded and the ref exists...
    if (!expanded && drawerRef.current) {
      // Use a timeout to allow the closing animation to complete
      const timer = setTimeout(() => {
        // Reset the transform style to whatever the CSS dictates
        drawerRef.current.style.transform = '';
        // Also reset the transition in case it was set to 'none' during a drag
        drawerRef.current.style.transition = '';
      }, 300); // 300ms matches our CSS transition duration

      // Cleanup function for the timer
      return () => clearTimeout(timer);
    }
  }, [expanded]);
  // =========================================================
  // END OF FIX
  // =========================================================


  // Common close handler
  const handleNavLinkClick = (id) => {
    setExpanded(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Navbar bg="white" variant="light" expand="lg" fixed="top" expanded={expanded} onToggle={() => setExpanded(!expanded)} className="app-navbar">
        <Container>
          <Navbar.Brand onClick={() => handleNavLinkClick('home')} className="navbar-brand-logo">
            <span className="logo-text">VY</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`mobile-drawer ${isDragging ? 'dragging' : ''}`}
            ref={drawerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {expanded && (
              <button className="drawer-close-btn" onClick={() => setExpanded(false)} aria-label="Close menu">
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
              <Nav.Link onClick={() => handleNavLinkick('contact')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;