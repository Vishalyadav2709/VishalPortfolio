import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa'; // Example icons

function Contact() {
  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-center mb-5 display-5">Get In Touch</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <p className="lead mb-4">
              I'm always open to new opportunities, collaborations, and conversations.
              Whether you have a project idea, a job offer, or just want to say hello, feel free to reach out!
            </p>

            <div className="row justify-content-center mb-5">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card bg-secondary text-white h-100 shadow-sm">
                  <div className="card-body">
                    <FaEnvelope size={40} className="mb-3 text-info" />
                    <h5 className="card-title">Email Me</h5>
                    <p className="card-text">vishal.yadav@example.com</p>
                    <a href="mailto:vishal.yadav@example.com" className="btn btn-outline-info btn-sm">Send Email</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card bg-secondary text-white h-100 shadow-sm">
                  <div className="card-body">
                    <FaLinkedin size={40} className="mb-3 text-primary" />
                    <h5 className="card-title">LinkedIn</h5>
                    <p className="card-text">Connect with me professionally</p>
                    <a href="https://linkedin.com/in/vishalyadav" className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">View Profile</a>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="mb-4">My Online Presence</h3>
            <div className="d-flex justify-content-center gap-4 mb-4">
              <a href="https://github.com/vishalyadav" className="text-white social-icon" target="_blank" rel="noopener noreferrer">
                <FaGithub size={45} />
                <span className="d-block mt-2">GitHub</span>
              </a>
              <a href="#" className="text-white social-icon" target="_blank" rel="noopener noreferrer"> {/* Replace # with actual resume link */}
                <FaFileAlt size={45} />
                <span className="d-block mt-2">Resume</span>
              </a>
              {/* Add more social links as needed */}
            </div>

            <p className="mt-5 text-muted">Looking forward to hearing from you!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;