import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // For custom styling if needed

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Senior Fullstack Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2021 - Present',
      description: [
        'Led development of scalable web applications using React.js, Node.js, and PostgreSQL.',
        'Mentored junior developers and conducted code reviews to ensure best practices.',
        'Implemented CI/CD pipelines, reducing deployment time by 30%.',
        'Collaborated with product teams to define and deliver new features.',
      ],
    },
    {
      id: 2,
      title: 'Fullstack Developer',
      company: 'Innovative Web Co.',
      duration: 'Jul 2018 - Dec 2020',
      description: [
        'Developed and maintained front-end interfaces with Vue.js and back-end APIs with Python/Django.',
        'Optimized database queries, improving application performance by 20%.',
        'Participated in agile development cycles, contributing to sprint planning and execution.',
        'Integrated third-party services and APIs to enhance application functionality.',
      ],
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'Startup Hub',
      duration: 'Jan 2017 - Jun 2018',
      description: [
        'Assisted in building responsive websites using HTML, CSS, and JavaScript.',
        'Learned and applied modern front-end frameworks like React.',
        'Debugged and resolved software defects in existing applications.',
        'Worked closely with senior developers on various web projects.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 display-5">Work Experience</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`row mb-5 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="col-md-5 text-md-end text-center">
                  <h3 className="h4 text-primary">{exp.company}</h3>
                  <p className="lead fw-bold mb-1">{exp.title}</p>
                  <p className="text-muted">{exp.duration}</p>
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                  <div className="timeline-line"></div>
                  <div className="timeline-dot"></div>
                </div>
                <div className="col-md-5">
                  <ul className="list-unstyled text-md-start text-center">
                    {exp.description.map((point, i) => (
                      <li key={i} className="mb-2"><small>{point}</small></li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;