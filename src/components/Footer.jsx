import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-secondary text-white text-center py-4">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Vishal Yadav. All rights reserved.
          <br />
          Built with React and Bootstrap.
        </p>
      </div>
    </footer>
  );
}

export default Footer;