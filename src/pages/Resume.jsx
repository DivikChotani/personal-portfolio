import React from 'react';
import { Download, Mail, Phone, MapPin, Globe, LucideGithub, Linkedin } from 'lucide-react';

export default function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      period: "2015 - 2019",
      details: "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems"
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Coding Academy",
      period: "2019",
      details: "Intensive 12-week program covering modern web development technologies"
    }
  ];

  const certifications = [
    "AWS Certified Developer Associate",
    "Google Analytics Certified",
    "React Developer Certification",
    "Node.js Application Developer"
  ];

  const technicalSkills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
    "Frameworks & Libraries": ["React", "Node.js", "Express", "Next.js", "Vue.js"],
    "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    "Tools & Technologies": ["Git", "Docker", "AWS", "Webpack", "Vite"],
    "Design & UI": ["Figma", "Adobe XD", "Tailwind CSS", "Bootstrap", "Material-UI"]
  };

  return (
    <>
      {/* Resume Header */}
      <section className="resume-header">
        <div className="resume-content">
          <div className="resume-title-section">
            <h1 className="resume-name">Your Name</h1>
            <h2 className="resume-title">Full Stack Developer</h2>
            <div className="download-section">
              <button className="download-btn">
                <Download size={20} />
                Download PDF
              </button>
            </div>
          </div>
          
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={16} />
              <span>your.email@example.com</span>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>City, State</span>
            </div>
            <div className="contact-item">
              <Globe size={16} />
              <span>yourwebsite.com</span>
            </div>
            <div className="contact-item">
              <LucideGithub size={16} />
              <span>github.com/yourusername</span>
            </div>
            <div className="contact-item">
              <Linkedin size={16} />
              <span>linkedin.com/in/yourprofile</span>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="resume-section">
        <div className="resume-content">
          <h3 className="resume-section-title">Professional Summary</h3>
          <p className="summary-text">
            Experienced Full Stack Developer with 5+ years of expertise in building scalable web applications 
            using modern JavaScript frameworks. Proven track record of delivering high-quality solutions that 
            improve user experience and business outcomes. Strong background in both frontend and backend 
            development with a passion for clean code and innovative problem-solving.
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

      {/* Professional Experience */}
      <section className="resume-section">
        <div className="resume-content">
          <h3 className="resume-section-title">Professional Experience</h3>
          
          <div className="job-entry">
            <div className="job-header-resume">
              <div>
                <h4 className="job-title-resume">Senior Frontend Developer</h4>
                <p className="company-resume">Tech Solutions Inc.</p>
              </div>
              <span className="job-period-resume">2022 - Present</span>
            </div>
            <ul className="job-responsibilities">
              <li>Lead frontend development for enterprise applications serving 10,000+ users</li>
              <li>Improved application performance by 40% through code optimization and lazy loading</li>
              <li>Mentored 3 junior developers and established coding standards for the team</li>
              <li>Collaborated with UX designers to implement responsive, accessible interfaces</li>
              <li>Led migration from legacy jQuery codebase to modern React architecture</li>
            </ul>
          </div>

          <div className="job-entry">
            <div className="job-header-resume">
              <div>
                <h4 className="job-title-resume">Full Stack Developer</h4>
                <p className="company-resume">Digital Agency Co.</p>
              </div>
              <span className="job-period-resume">2020 - 2022</span>
            </div>
            <ul className="job-responsibilities">
              <li>Developed 15+ custom web applications for clients across various industries</li>
              <li>Built RESTful APIs using Node.js and Express, serving React frontends</li>
              <li>Implemented automated testing strategies, reducing production bugs by 60%</li>
              <li>Worked directly with clients to gather requirements and provide technical solutions</li>
              <li>Optimized database queries and application architecture for better performance</li>
            </ul>
          </div>

          <div className="job-entry">
            <div className="job-header-resume">
              <div>
                <h4 className="job-title-resume">Junior Developer</h4>
                <p className="company-resume">Startup Ventures</p>
              </div>
              <span className="job-period-resume">2019 - 2020</span>
            </div>
            <ul className="job-responsibilities">
              <li>Contributed to 50+ feature releases for a fast-growing SaaS platform</li>
              <li>Learned modern development practices including React, Node.js, and cloud deployment</li>
              <li>Participated in agile development processes and daily standups</li>
              <li>Collaborated with senior developers on code reviews and best practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="resume-section">
        <div className="resume-content">
          <h3 className="resume-section-title">Education</h3>
          {education.map((edu, idx) => (
            <div key={idx} className="education-entry">
              <div className="education-header">
                <div>
                  <h4 className="degree-title">{edu.degree}</h4>
                  <p className="school-name">{edu.school}</p>
                </div>
                <span className="education-period">{edu.period}</span>
              </div>
              <p className="education-details">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="resume-section">
        <div className="resume-content">
          <h3 className="resume-section-title">Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="certification-item">
                <span className="cert-bullet">•</span>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}