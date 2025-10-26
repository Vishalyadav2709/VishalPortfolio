import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // For custom full-screen height and background

function Home() {
  const handleDownloadResume = () => {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    const resumeUrl = '/Vishal_Yadav_Resume.pdf'; 
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Vishal_Yadav_Resume.pdf'); // Set the download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="d-flex align-items-center justify-content-center text-center vh-100 bg-white">
      <div className="container">
        <h1 className="display-3 fw-bold text-dark">Vishal Yadav</h1>
        <p className="lead fs-4 text-secondary mb-1">Fullstack Developer</p>
        <p className="lead text-muted mb-4">
          Crafting robust and scalable web applications with a focus on user experience. <br />
          Passionate about innovative solutions and continuous learning.
        </p>
        <button onClick={handleDownloadResume} className="btn btn-primary btn-lg mt-3">
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Home;