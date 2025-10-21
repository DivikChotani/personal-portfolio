import React from 'react';
import { Download, Mail, Phone, MapPin, Globe, LucideGithub, Linkedin } from 'lucide-react';

export default function Resume() {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your PDF in the public folder
    link.download = 'Divik_Chotani_Resume.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Los Angeles",
      period: "2023 - 2027",
      details: "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems"
    },
  ];

  const technicalSkills = {
    "Programming Languages": ["Python, Rust, C#, Java, C++, Go, SQL, JavaScript, HTML/CSS, C, JSON"],
    "Frameworks & Libraries": ["Angular, Next.js, Node.js, Flask, Spring Boot, .NET, , Django"],
    "Developer Tools": ["Git, Docker, GCP, MongoDB, Redis, GraphQL, AWS, Relational Databases, DynamoDb, Kubernetes"],
  };

  return (
    <>
      {/* Resume Header */}
        <div className="resume-content">
          <div className="resume-title-section">
            <h1 className="resume-name">Divik Chotani</h1>
            <div className="download-section">
              <button className="download-btn" onClick={handleDownload}>
                <Download size={20} />
                Download PDF
              </button>
            </div>
          </div>
        </div>

      {/* Professional Summary */}
      <section className="resume-section">
        <div className="resume-content">
          <h3 className="resume-section-title">Professional Summary</h3>
          <p className="summary-text">
            UCLA Computer Science student with experience in full-stack development, systems optimization, and AI integration. Proven ability to build scalable, high-performance software across research and industry settings. Skilled in modern frameworks and performance engineering, with a passion for efficient, reliable, and impactful technology.
          </p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="resume-section">
        <div className="resume-content">
          <h3 className="resume-section-title">Technical Skills</h3>
          <div className="skills-resume-grid">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category} className="skill-category-resume">
                <h4 className="skill-category-title">{category}</h4>
                <p className="skill-items">{skills.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
