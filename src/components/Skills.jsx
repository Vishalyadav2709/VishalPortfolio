import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLaptopCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa'; // Example icons

function Skills() {
  return (
    <section id="skills" className="py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-center mb-5 display-5">My Skills</h2>
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <FaLaptopCode size={50} className="mb-3 text-primary" />
            <h3 className="h5">Front-End</h3>
            <ul className="list-unstyled">
              <li>HTML5, CSS3, JavaScript (ES6+)</li>
              <li>React.js, Vue.js, Angular</li>
              <li>Redux, SASS/LESS</li>
              <li>Bootstrap, Material-UI</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <FaServer size={50} className="mb-3 text-success" />
            <h3 className="h5">Back-End</h3>
            <ul className="list-unstyled">
              <li>Node.js, Express.js</li>
              <li>Python, Django, Flask</li>
              <li>Java, Spring Boot, PHP, Laravel</li>
              <li>RESTful APIs, GraphQL</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <FaDatabase size={50} className="mb-3 text-info" />
            <h3 className="h5">Databases</h3>
            <ul className="list-unstyled">
              <li>MongoDB, PostgreSQL</li>
              <li>MySQL, SQL Server</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <FaTools size={50} className="mb-3 text-warning" />
            <h3 className="h5">Tools & Cloud</h3>
            <ul className="list-unstyled">
              <li>Git, Docker</li>
              <li>AWS, Azure, GCP</li>
              <li>Jenkins, Webpack</li>
              <li>npm/yarn</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;