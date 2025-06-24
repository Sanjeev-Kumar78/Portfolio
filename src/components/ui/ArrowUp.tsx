import { useState, useEffect } from "react";
import "../../styles/ArrowUp.css";

const ArrowUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled down 300px or more
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-indicator ${isVisible ? "visible" : "hidden"}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      style={{ pointerEvents: "auto", marginRight: "2rem" }}
    >
      <svg className="scroll-icon" viewBox="0 0 384 512">
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
      </svg>
    </button>
  );
};

export default ArrowUp;
