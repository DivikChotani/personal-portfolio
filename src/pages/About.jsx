import React from 'react';

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "REST APIs"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Firebase"] }
  ];

  return (
    <>
      {/* About Section */}
      <section className="about-section">
        <div className="section-content">
          <h1 className="page-title">About Me</h1>
          <div className="about-grid">
            <div className="about-text-content">
              <p className="about-text">
                I'm a passionate developer with a keen eye for design and a love for creating seamless user experiences. 
                With several years of experience in web development, I've worked on projects ranging from small business 
                websites to large-scale enterprise applications.
              </p>
              <p className="about-text">
                My journey in technology started with curiosity about how websites work, which led me to dive deep into 
                both frontend and backend development. I believe in writing clean, maintainable code and staying up-to-date 
                with the latest industry trends and best practices.
              </p>
              <p className="about-text">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or enjoying a good cup of coffee while reading about the latest trends in tech. I'm also passionate about 
                mentoring junior developers and sharing knowledge with the community.
              </p>
            </div>
            <div className="about-image">
              <div className="placeholder-image">
                <span>Your Photo Here</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="skills-content">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="skill-card">
                <h3 className="skill-category">{skillGroup.category}</h3>
                <ul className="skill-list">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="skill-item">
                      <span className="skill-bullet"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="interests-section">
        <div className="section-content">
          <h2 className="section-title">Beyond Code</h2>
          <div className="interests-grid">
            <div className="interest-item">
              <h3>Open Source</h3>
              <p>Contributing to projects that make a difference in the developer community.</p>
            </div>
            <div className="interest-item">
              <h3>Learning</h3>
              <p>Always exploring new technologies and frameworks to stay current.</p>
            </div>
            <div className="interest-item">
              <h3>Mentoring</h3>
              <p>Helping junior developers grow and succeed in their careers.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}