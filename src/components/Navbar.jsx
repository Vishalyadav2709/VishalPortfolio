import React, { useState, useEffect, useRef, useCallback } from 'react'; // Added useRef, useCallback
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function AppNavbar() {
  const [expanded, setExpanded] = useState(false);
  const drawerRef = useRef(null); // Ref to the drawer element for click outside and drag logic

  // --- Click Outside to Close ---
  const handleClickOutside = useCallback((event) => {
    // If the drawer is open AND the click is NOT inside the drawer
    // AND the click is NOT on the Navbar.Toggle button (hamburger icon)
    if (
      expanded &&
      drawerRef.current &&
      !drawerRef.current.contains(event.target) &&
      !event.target.closest('.navbar-toggler') // Ignore clicks on the toggler itself
    ) {
      setExpanded(false);
    }
  }, [expanded]); // Recreate if expanded state changes

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = 'hidden';
      // Add global click listener when drawer is open
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.body.style.overflow = '';
      // Remove global click listener when drawer is closed
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }
    return () => { // Cleanup function
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [expanded, handleClickOutside]); // Depend on expanded and handleClickOutside


  // --- Drag to Close (Mobile Only) ---
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslateX, setCurrentTranslateX] = useState(0); // For animating during drag

  const handleTouchStart = (e) => {
    if (e.touches.length === 1 && expanded) { // Only if one finger and drawer is open
      setIsDragging(true);
      setStartX(e.touches[0].clientX);
      // Ensure smooth transition is off during drag
      if (drawerRef.current) {
        drawerRef.current.style.transition = 'none';
      }
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    let deltaX = currentX - startX;

    // Only allow dragging to the right (positive deltaX)
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
      // Re-enable transition
      drawerRef.current.style.transition = 'right 0.3s ease-in-out, transform 0.3s ease-in-out';

      // Decide whether to close or snap back
      const drawerWidth = drawerRef.current.offsetWidth;
      if (currentTranslateX > drawerWidth * 0.3) { // If dragged more than 30% of width
        setExpanded(false);
        // Ensure it slides off completely even if transform is still active
        drawerRef.current.style.transform = `translateX(${drawerWidth}px)`;
      } else {
        // Snap back
        drawerRef.current.style.transform = `translateX(0px)`;
      }
    }
    setCurrentTranslateX(0); // Reset for next drag
  };


  // Common close handler
  const handleNavLinkClick = (id) => {
    setExpanded(false); // Close the drawer on link click

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* NO offcanvas-overlay div here anymore for click outside */}
      <Navbar bg="white" variant="light" expand="lg" fixed="top" expanded={expanded} onToggle={() => setExpanded(!expanded)} className="app-navbar">
        <Container>
          <Navbar.Brand onClick={() => handleNavLinkClick('home')} className="navbar-brand-logo">
            <span className="logo-text">VY</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`mobile-drawer ${isDragging ? 'dragging' : ''}`} // Add dragging class
            ref={drawerRef} // Attach ref to the drawer
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            // onMouseDown for desktop drag (optional, but good for testing)
            // onMouseDown={handleTouchStart}
            // onMouseMove={handleTouchMove}
            // onMouseUp={handleTouchEnd}
            // onMouseLeave={handleTouchEnd} // Important for mouse events if dragging off element
          >
            {/* Close button for mobile drawer, only shown when expanded */}
            {expanded && (
              <button className="drawer-close-btn" onClick={handleNavLinkClick} aria-label="Close menu">
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