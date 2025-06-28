import "../../styles/About.css";
import { ProfileData } from "../../data/profile";
import { useEffect, useRef, useState, useCallback } from "react";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

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

  // Set Head devicon cdn
  useEffect(() => {
    const deviconCDN = `<link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />`;
    if (!document.querySelector('link[href*="devicon"]')) {
      document.head.insertAdjacentHTML("beforeend", deviconCDN);
    }
  }, []);

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-play carousel for mobile
  useEffect(() => {
    if (isMobile && isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % skillCategories.length);
      }, 3000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isMobile, isAutoPlaying, skillCategories.length]);

  // Handle manual navigation
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % skillCategories.length);
  }, [skillCategories.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + skillCategories.length) % skillCategories.length
    );
  }, [skillCategories.length]);

  // Handle touch gestures for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    // Reset touch states
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isMobile) return;

      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobile, nextSlide, prevSlide]);

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
            <p className="about-description">
              {ProfileData.about.description ||
                "I am a passionate developer with a keen interest in creating innovative solutions. My journey in technology has been driven by curiosity and a desire to learn continuously. I enjoy tackling challenges and believe in the power of collaboration to achieve great results."}
            </p>

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

        {/* Desktop View - Horizontal Scroll */}
        {!isMobile && (
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
        )}

        {/* Mobile View - Carousel */}
        {isMobile && (
          <div className="skills-container mobile">
            <div className="carousel-wrapper">
              <button className="carousel-btn prev" onClick={prevSlide}>
                &#8249;
              </button>

              <div
                className="carousel-content"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="carousel-track"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {skillCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="carousel-slide">
                      <div className="skills-category mobile">
                        <div className="category-header">
                          <span className="category-icon">{category.icon}</span>
                          <h4 className="category-title">{category.title}</h4>
                        </div>
                        <div className="skills-list mobile">
                          {category.skills.map((skill, index) => (
                            <div key={index} className="skill-item mobile">
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
                    </div>
                  ))}
                </div>
              </div>

              <button className="carousel-btn next" onClick={nextSlide}>
                &#8250;
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              {skillCategories.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${
                    index === currentSlide ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            {/* Auto-play control */}
            <button
              className="autoplay-toggle"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            >
              {isAutoPlaying ? "⏸️" : "▶️"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
