import { useState, useEffect, useMemo } from "react";
import "../../styles/Hero.css";
import { ProfileData } from "../../data/profile";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = useMemo(() => ProfileData.about.interest, []);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex];

        if (!isDeleting) {
          setCurrentText(current.substring(0, currentText.length + 1));

          if (currentText === current) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(current.substring(0, currentText.length - 1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <p className="hero-pre-title">HELLO & WELCOME</p>
        <h1 className="hero-main-title font-harmony">
          I'm {ProfileData.personal.name}.
          <br />I love <span className="highlight-text">{currentText}</span>
        </h1>
        <p className="pt-1 text-xs text-wrap md:text-sm">
          {ProfileData.personal.tagline}
        </p>
      </div>
    </section>
  );
};

export default Hero;
