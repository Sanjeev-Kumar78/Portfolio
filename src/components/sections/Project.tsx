import "../../styles/Project.css";
import { ProfileData } from "../../data/profile";

const Project = () => {
  return (
    <section className="project-container" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        {ProfileData.projects.map((project, index) => (
          <div className="project-card" key={project.title} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="project-image">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                loading="lazy"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-links">
                {project.liveUrl && (
                  <button
                    onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                    className="project-link"
                    aria-label={`View live demo of ${project.title}`}
                    type="button"
                  >
                    🚀 Live Demo
                  </button>
                )}
                {project.sourceUrl && (
                  <button
                    onClick={() => window.open(project.sourceUrl, '_blank', 'noopener,noreferrer')}
                    className="project-link"
                    aria-label={`View source code of ${project.title}`}
                    type="button"
                  >
                    📋 Source Code
                  </button>
                )}
              </div>
              
              <div className="project-skills">
                {project.skillsUsed.map((skill) => (
                  <span className="project-skill-badge" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="project-status">
                <span className="project-status-badge">
                  {project.status === "Completed" ? "✅" : "🔄"} {project.status}
                </span>
                <span className="project-domain">
                  {project.projectdomain}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
