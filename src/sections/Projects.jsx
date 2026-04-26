const projects = [
  {
    title: "Direct Sales Management System",
    subtitle: "Full-Stack Web Application",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Supabase"],
    description:
      "Built a full-stack system for member registration, sponsor hierarchy, multi-level bonus distribution, and redemption tracking. Designed a ledger-based approach for bonus consistency and balance computation, with backend logic for hierarchy traversal and reporting.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/mich022001/sds-webapp",
      },
    ],
  },
];

function Projects() {
  return (
    <div>
      <div className="section-header">
        <span className="section-label">Projects</span>
        <div className="section-line"></div>
      </div>

      <div className="projects-stack">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <div>
                <p className="project-subtitle">{project.subtitle}</p>
                <h3 className="project-title">{project.title}</h3>
              </div>

              <div className="project-actions">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="tag-list">
              {project.tech.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
