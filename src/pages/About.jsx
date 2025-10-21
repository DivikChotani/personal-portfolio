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
                I'm a third year computer science student at UCLA, and I'm really interested in all aspects of software engineering!
                My experience in web development compes from my past internships and personal projects. I've also worked on improving
                runtime speed for code recently through lower level projects.
              </p>
              <p className="about-text">
                I'm currently a research assistant at UCLA's programmable software systems lab. I have previously worked for two
                companies, Pixii and Validia, where I gained experience in web development and integrating AI
                into user facing products.
              </p>
              <p className="about-text">
                When I'm not coding, you can find me playing soccer or working out at the gym. I also enjoy learning about and experimenting with emerging tech tools and frameworks.

              </p>
            </div>
            <div className="about-image">
              <div className="placeholder-image">
                <span><img src={`${import.meta.env.BASE_URL}picofme.jpeg`} alt="Profile" /></span>
              </div>
            </div>
          </div>
        </div>
      </section>




    </>
  );
}