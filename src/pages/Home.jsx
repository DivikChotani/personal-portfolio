import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hi! I'm Divik</h1>
          <p className="hero-subtitle">
            Software Engineer | UCLA School of Engineering
          </p>
          <p className="hero-description">
            Passionate about everything from creating beautiful client side and server side applications, to building high performance computer systems
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn-primary">
              Learn More About Me
            </Link>
            <Link to="/experience" className="btn-secondary">
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="social-links">
            <a
              href="https://github.com/DivikChotani"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/divik-chotani-8b3585242/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="mailto:divik.chotani@gmail.com"
              className="social-icon"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}