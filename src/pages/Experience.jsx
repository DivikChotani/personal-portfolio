import { ExternalLink, LucideGithub } from 'lucide-react';

export default function Experience() {
    const projects = [
        {
            title: "Co-op Minesweepe",
            description: "A full-stack online multiplayer version of minesweeper that you can play with your friends",
            tech: ["Golang", "AWS", "PostgreSQL"],
            link: "https://coopminesweeper.netlify.app/game",
            featured: true
        },
        {
            title: "Amazon Listing Grader",
            description: "An AI-powered tool to see how well you are advertising your product on amazon.com.",
            tech: ["React", "Firebase", "Tailwind", "Socket.io"],
            link: "https://amazon-listing-grader.pixii.ai/",
            featured: true
        },
        {
            title: "Data Journalist",
            description: "Wrote articles on whatever topic I found interesting after digging deep into it.",
            tech: ["Html Scraping", "Requests", "Beatiful Soup"],
            link: "https://www.bruinsportsanalytics.com/post/leverkusen-success",
            featured: true
        },
        {
            title: "Portfolio Website (This Page!)",
            description: "Personal portfolio showcasing projects and skills with modern design.",
            tech: ["React", "Vite"],
            link: "#",
            featured: false
        },
        {
            title: "Adversarial Models Research",
            description: "A research project analyzing how we can spoof CNNs and other ML recognition models.",
            tech: ["Python", "Pytorch"],
            link: "#",
            featured: false
        }
    ];

    const workExperience = [
        {
            company: "UCLA Programmable Software Systems Lab",
            position: "Research Assistant",
            period: "March 2025 - Present",
            description: "Focused on parallel computing and compiler optimization to accelerate real-world software performance.",
            achievements: [
                "Built eBPF observability tool to track over 1M concurrent event.",
                "Contributed to the pash project that cut runtimes down by up to 83% for shell scripts.",
                "Added parrellization rules for pre existing and custom shell commands."
            ]
        },
        {
            company: "Validia",
            position: "SWE Intern",
            period: "Sept. 2024 - Jan. 2025",
            description: "Developed AI-powered security and voice verification tools for real-time identity protection.",
            achievements: [
                "Built facial verification Chrome extension.",
                "Developed FastAPI backend detecting deepfake voices with 72% accuracy.",
                "Improved audio deepfake detection by 20% using PyTorch and Python."
            ]
        },
        {
            company: "Pixii",
            position: "SWE Intern",
            period: "Jan 2025 - Sept. 2025",
            description: "Started career building features for a fast-growing SaaS platform, learning modern development practices.",
            achievements: [
                "Built Slackbot generating 30 days of ad content.",
                "Built analytics dashboard boosting user return rate by 16%.",
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
                        <h3 className="section-subtitle">
                            Other Projects</h3>
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