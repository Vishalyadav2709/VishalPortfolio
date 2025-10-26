import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
  const projectData = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application built with React.js, Node.js, Express.js, and MongoDB. Features user authentication, product catalog, shopping cart, and payment integration.',
      image: 'https://via.placeholder.com/400x250?text=E-commerce+App',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Task Management Application',
      description: 'A responsive task management tool developed using Vue.js, Flask, and PostgreSQL. Allows users to create, manage, and prioritize tasks.',
      image: 'https://via.placeholder.com/400x250?text=Task+Manager',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      description: 'A real-time chat application leveraging Socket.IO with a React front-end and a Node.js back-end. Supports multiple chat rooms and direct messaging.',
      image: 'https://via.placeholder.com/400x250?text=Chat+App',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'Portfolio Website V1',
      description: 'The first iteration of my personal portfolio website, showcasing fundamental web development skills using HTML, CSS, and basic JavaScript.',
      image: 'https://via.placeholder.com/400x250?text=Portfolio+V1',
      liveLink: '#',
      githubLink: '#',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-5">My Projects</h2>
        <div className="row">
          {projectData.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <div className="mt-auto">
                    <a href={project.liveLink} className="btn btn-primary btn-sm me-2" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a href={project.githubLink} className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;