import { ExternalLink, LucideGithub } from 'lucide-react';

export default function Experience() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack online shopping platform with payment integration and real-time inventory management.",
            tech: ["React", "Node.js", "MongoDB", "Stripe API"],
            link: "#",
            github: "#",
            featured: true
        },
        {
            title: "Task Management App",
            description: "Collaborative project management tool with real-time updates and team communication features.",
            tech: ["React", "Firebase", "Tailwind", "Socket.io"],
            link: "#",
            github: "#",
            featured: true
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather monitoring dashboard with forecasts and interactive maps.",
            tech: ["React", "API Integration", "Charts.js", "Mapbox"],
            link: "#",
            github: "#",
            featured: false
        },
        {
            title: "Portfolio Website",
            description: "Personal portfolio showcasing projects and skills with modern design.",
            tech: ["React", "Vite", "CSS3", "React Router"],
            link: "#",
            github: "#",
            featured: false
        }
    ];

    const workExperience = [
        {
            company: "Tech Solutions Inc.",
            position: "Senior Frontend Developer",
            period: "2022 - Present",
            description: "Lead frontend development for enterprise applications, mentoring junior developers and implementing modern React patterns.",
            achievements: [
                "Improved application performance by 40% through code optimization",
                "Led migration from legacy jQuery to React",
                "Mentored 3 junior developers"
            ]
        },
        {
            company: "Digital Agency Co.",
            position: "Full Stack Developer",
            period: "2020 - 2022",
            description: "Developed custom web applications for clients across various industries using modern web technologies.",
            achievements: [
                "Built 15+ client websites and web applications",
                "Implemented automated testing reducing bugs by 60%",
                "Collaborated with design team on UX improvements"
            ]
        },
        {
            company: "Startup Ventures",
            position: "Junior Developer",
            period: "2019 - 2020",
            description: "Started career building features for a fast-growing SaaS platform, learning modern development practices.",
            achievements: [
                "Contributed to 50+ feature releases",
                "Learned React, Node.js, and cloud deployment",
                "Participated in agile development processes"
            ]
        }
    ];

    return (
        <>
            {/* Projects Section */}
            <section className="projects-section">
                <div className="projects-content">
                    <h1 className="page-title">Projects & Experience</h1>

                    <div className="section-header">
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-description">
                            A selection of projects that showcase my skills and passion for development.
                        </p>
                    </div>

                    <div className="projects-grid">
                        {projects.filter(p => p.featured).map((project, idx) => (
                            <div key={idx} className="project-card featured">
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <div className="project-links">
                                        <a href={project.github} className="project-icon-link" title="View Code">
                                            <LucideGithub size={20} />
                                        </a>
                                        <a href={project.link} className="project-icon-link" title="Live Demo">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="section-header">
                        <h3 className="section-subtitle">Other Projects</h3>
                    </div>

                    <div className="projects-list">
                        {projects.filter(p => !p.featured).map((project, idx) => (
                            <div key={idx} className="project-item">
                                <div className="project-item-header">
                                    <h4 className="project-item-title">{project.title}</h4>
                                    <div className="project-links">
                                        <a href={project.github} className="project-icon-link">
                                            <LucideGithub size={18} />
                                        </a>
                                        <a href={project.link} className="project-icon-link">
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>
                                <p className="project-item-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag small">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work Experience Section */}
            <section className="experience-section">
                <div className="section-content">
                    <h2 className="section-title">Work Experience</h2>
                    <div className="timeline">
                        {workExperience.map((job, idx) => (
                            <div key={idx} className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <div className="job-header">
                                        <h3 className="job-title">{job.position}</h3>
                                        <span className="job-period">{job.period}</span>
                                    </div>
                                    <h4 className="company-name">{job.company}</h4>
                                    <p className="job-description">{job.description}</p>
                                    <ul className="achievements-list">
                                        {job.achievements.map((achievement, i) => (
                                            <li key={i} className="achievement-item">{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}