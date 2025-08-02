import "../../styles/About.css";
import { ProfileData } from "../../data/profile";
import { useEffect, useRef } from "react";

const About = () => {
  const skillsContainerRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ProfileData.skills.programmingLanguages,
      icon: "💻",
    },
    {
      title: "Frontend",
      skills: ProfileData.skills.webdev.frontend,
      icon: "🎨",
    },
    {
      title: "Backend",
      skills: ProfileData.skills.webdev.backend,
      icon: "⚙️",
    },
    {
      title: "Databases",
      skills: ProfileData.skills.webdev.databases,
      icon: "📊",
    },
    {
      title: "Data Science",
      skills: ProfileData.skills.datascience,
      icon: "🔬",
    },
    {
      title: "Cloud",
      skills: ProfileData.skills.cloud,
      icon: "☁️",
    },
    {
      title: "Tools",
      skills: ProfileData.skills.tools,
      icon: "🛠️",
    },
  ];

  // Set Head devicon cdn with preload and font-display
  useEffect(() => {
    // Preload the DevIcon CSS to improve loading
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.href =
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css";
    preloadLink.as = "style";
    preloadLink.onload = function () {
      // Convert preload to stylesheet after loading
      (this as HTMLLinkElement).onload = null;
      (this as HTMLLinkElement).rel = "stylesheet";
    };

    if (!document.querySelector('link[href*="devicon"]')) {
      document.head.appendChild(preloadLink);
    }

    // Preload the font with font-display swap
    const fontPreload = document.createElement("link");
    fontPreload.rel = "preload";
    fontPreload.href =
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/fonts/devicon.ttf";
    fontPreload.as = "font";
    fontPreload.type = "font/ttf";
    fontPreload.crossOrigin = "anonymous";

    if (!document.querySelector('link[href*="devicon.ttf"]')) {
      document.head.appendChild(fontPreload);
    }

    // Add font-display CSS for better performance
    const fontDisplayStyle = document.createElement("style");
    fontDisplayStyle.textContent = `
      @font-face {
        font-family: 'devicon';
        src: url('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/fonts/devicon.ttf') format('truetype');
        font-display: swap;
      }
    `;
    if (!document.querySelector("style[data-devicon]")) {
      fontDisplayStyle.setAttribute("data-devicon", "true");
      document.head.appendChild(fontDisplayStyle);
    }
  }, []);

  return (
    <section className="about-container" id="about">
      {/* About Content Section */}
      <div className="about-content">
        <div className="about-header">
          <h2 className="about-title font-harmony">About Me</h2>
          <div className="title-decoration"></div>
        </div>

        <div className="about-info">
          <div className="about-text">
            <div className="about-description">
              {ProfileData.about.description ? (
                ProfileData.about.description
                  .split("\n\n")
                  .map((paragraph, index) => {
                    // Check if paragraph contains bullet points
                    if (paragraph.includes("> ")) {
                      const lines = paragraph.split("\n");
                      return (
                        <div key={index} className="paragraph-with-bullets">
                          {lines.map((line, lineIndex) => {
                            if (line.startsWith("> ")) {
                              return (
                                <li key={lineIndex} className="bullet-item">
                                  {line.substring(2)}
                                </li>
                              );
                            } else if (line.trim()) {
                              return (
                                <p key={lineIndex} className="paragraph-text">
                                  {line}
                                </p>
                              );
                            }
                            return null;
                          })}
                        </div>
                      );
                    } else {
                      // Regular paragraph
                      return (
                        <p key={index} className="paragraph-text">
                          {paragraph}
                        </p>
                      );
                    }
                  })
              ) : (
                <p className="paragraph-text">
                  I am a passionate developer with a keen interest in creating
                  innovative solutions. My journey in technology has been driven
                  by curiosity and a desire to learn continuously. I enjoy
                  tackling challenges and believe in the power of collaboration
                  to achieve great results.
                </p>
              )}
            </div>

            {ProfileData.about.interest &&
              ProfileData.about.interest.length > 0 && (
                <div className="interests-section">
                  <h4 className="interests-title">Interests & Passions</h4>
                  <div className="interests-grid">
                    {ProfileData.about.interest.map((interest, index) => (
                      <span key={index} className="interest-tag">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <div className="skills-header">
          <h3 className="skills-title">Technical Expertise</h3>
          <p className="skills-subtitle">Technologies & tools I work with</p>
        </div>

        {/* Horizontal smooth scroll on all devices */}
        <div className="skills-container desktop" ref={skillsContainerRef}>
          <div className="skills-scroll-wrapper">
            <div className="skills-categories">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="skills-category">
                  <div className="category-header">
                    <span className="category-icon">{category.icon}</span>
                    <h4 className="category-title">{category.title}</h4>
                  </div>
                  <div className="skills-list">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <div className="skill-icon-wrapper">
                          {skill.icon.startsWith("https://") ? (
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="skill-icon"
                              loading="lazy"
                            />
                          ) : (
                            <i className={`skill-icon ${skill.icon}`}></i>
                          )}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
