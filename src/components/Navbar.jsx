import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const drawerRef = useRef(null);

  const navLinkIds = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100; // Offset to trigger a bit earlier
    let currentSectionId = 'home';

    for (const id of navLinkIds) {
      const section = document.getElementById(id);
      if (section) {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          currentSectionId = id;
          break;
        }
      }
    }
    setActiveLink(currentSectionId);
  }, [navLinkIds]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

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

  useEffect(() => {
    if (!expanded && drawerRef.current) {
      const timer = setTimeout(() => {
        drawerRef.current.style.transform = '';
        drawerRef.current.style.transition = '';
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [expanded]);

  // Common close handler
  const handleNavLinkClick = (id) => {
    setExpanded(false);
    setActiveLink(id);
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
              <Nav.Link onClick={() => handleNavLinkClick('home')} className={activeLink === 'home' ? 'active' : ''}>Home</Nav.Link>
              <Nav.Link onClick={() => handleNavLinkClick('about')} className={activeLink === 'about' ? 'active' : ''}>About</Nav.Link>
              <Nav.Link onClick={() => handleNavLinkClick('skills')} className={activeLink === 'skills' ? 'active' : ''}>Skills</Nav.Link>
              <Nav.Link onClick={() => handleNavLinkClick('experience')} className={activeLink === 'experience' ? 'active' : ''}>Experience</Nav.Link>
              <Nav.Link onClick={() => handleNavLinkClick('projects')} className={activeLink === 'projects' ? 'active' : ''}>Projects</Nav.Link>
              <Nav.Link onClick={() => handleNavLinkClick('contact')} className={activeLink === 'contact' ? 'active' : ''}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;