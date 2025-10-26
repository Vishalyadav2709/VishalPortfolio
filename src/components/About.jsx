import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mb-4 display-5">About Me</h2>
            <p className="lead">
              I'm a passionate Fullstack Developer with a knack for building robust and scalable web applications.
              With expertise in both front-end and back-end technologies, I thrive on bringing ideas to life through
              clean code and innovative solutions. I'm constantly learning and adapting to new technologies to
              deliver the best possible user experiences.
            </p>
            <p className="mt-4">
              My journey in development has equipped me with skills to tackle complex challenges,
              from designing intuitive user interfaces to architecting efficient back-end systems.
              I believe in creating seamless experiences for users and maintainable code for fellow developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;